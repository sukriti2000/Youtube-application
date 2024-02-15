import React from "react";

import Aux from '../../Hoc/auxlliary';

import classes from './VideoItem.module.css';

const videoItem = ({video , onVideoSelect})=>{
    return (
        <Aux>
            <div onClick={()=>onVideoSelect(video)} className={classes.VideoItemContainer}>
            <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
            <div className={classes.VideoItemDetails}>
                <h5>{video.snippet.title} </h5>
                <p>{video.snippet.channelTitle} </p>
            </div>
            </div>
        </Aux>
    )
}

export default videoItem;