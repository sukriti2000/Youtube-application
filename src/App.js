import React, { Component } from "react";

import { MenuBar, VideoDetail, VideoList } from "./components/index";
import youtube from "./api/youtube";

import classes from "./app.module.css";

class VideoPlay extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    searchResult: false,
    comments: [],
  };
  // componentDidMount(){
  //     this.handleSubmit('latest');
  // }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyBIBEM4gHr9UnzurdaWljJhxzNWv2cSljA",
        q: searchTerm,
      },
    });
    this.setState({ videos: response.data.items, searchResult: true });
  };
  onVideoSelect = async (video) => {
    this.setState({ selectedVideo: video });
    const comments = await youtube.get("commentThreads", {
      params: {
        part: "snippet,replies",
        maxResults: 10,
        order: "relevance",
        videoId: video.id.videoId,
        key: "AIzaSyBIBEM4gHr9UnzurdaWljJhxzNWv2cSljA",
      },
    });
    this.setState({ comments: comments.data.items });
  };
  render() {
    let content = <h2>Start Your Search Now!!</h2>;
    let selectedResult = <h2>Just Select A Video To PLay!!</h2>;
    if (this.state.selectedVideo != null) {
      selectedResult = (
        <div className={classes.SingleVideoPlay}>
          <VideoDetail
            video={this.state.selectedVideo}
            comments={this.state.comments}
          />
        </div>
      );
    }
    if (this.state.searchResult) {
      content = (
        <div className={classes.VideoContainer}>
          {selectedResult}
          <div className={classes.videoList}>
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      );
    }
    return (
      <div className={classes.mainContainer}>
        <div className={classes.MenuBar}>
          <MenuBar onFormSubmit={this.handleSubmit} />
        </div>
        {content}
        {/* <DictaPhone handleSubmit={this.handleSubmit} /> */}
        {/* <Comments /> */}
      </div>
    );
  }
}

export default VideoPlay;
