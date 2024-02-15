import React  from 'react';

import Aux from '../../Hoc/auxlliary';
import {Loader} from '../index';
import Comments from '../Comments/Comments';

import classes from './VideoDetail.module.css';

const VideoDetail = ({video , comments})=>{
    if(!video) return <Loader />

    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`
    return (
        <Aux >  
            <div className={classes.iframeContainer}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src= {videoSrc} />
            </div>  
            <div className={classes.videoDetails}>
                <h3 className={classes.videoTitle}>{video.snippet.title} - {video.snippet.channelTitle}</h3>
                <h4 className={classes.channelName} >{video.snippet.channelTitle}</h4>
                <p className={classes.channelDesc}>{video.snippet.description}</p>
            </div>
            <Comments comments={comments} />
        </Aux>
    )
}

export default VideoDetail;    