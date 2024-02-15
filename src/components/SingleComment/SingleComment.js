import React from 'react';
import classes from './SingleComment.module.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import parse from 'html-react-parser';

const SingleComment = (props)=>{
    return(
        <div className={classes.SingleComment}>
            <p><b>{parse(props.author)}</b></p>
            <p>{parse(props.comment)}</p>
            <div className={classes.SingleCommentLikeDislike}>
                <ThumbUpAltIcon stye={{fontSize : 10}} /> {props.likes}
            </div>
            <br />
        </div>
    )
}

export default SingleComment;