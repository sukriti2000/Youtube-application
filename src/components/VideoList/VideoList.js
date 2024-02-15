import React from 'react';

import {VideoItem} from '../index';
import Aux from '../../Hoc/auxlliary';
import classes from './VideoList.module.css';

const VideoList = (props)=>{
    const ListOfVideos = props.videos.map((video , id)=> <VideoItem onVideoSelect={props.onVideoSelect} key={id} video={video} />);
    return (
        <Aux>
            <div className={classes.VideoList}>
                {ListOfVideos}
            </div>
            
        </Aux>
    );
}

export default VideoList;    