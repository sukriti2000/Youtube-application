import React from 'react';
import classes from './Comments.module.css';
import SingleComment from '../SingleComment/SingleComment';

const Comments = (props)=>{
    const result = props.comments.map(comment =>{
        return(
            <SingleComment
                key = {comment.id}
                author = {comment.snippet.topLevelComment.snippet.authorDisplayName}
                comment = {comment.snippet.topLevelComment.snippet.textDisplay}
                likes = {comment.snippet.topLevelComment.snippet.likeCount}
            />
        )
    })
    return(
        <div className={classes.Comments}>
            <h2>Comments--</h2>
            {result}
        </div>
        //     <div className={classes.SingleComment}>
        //         <p><b>Diyansh Gupta</b></p>
        //         <p>Hey this is too awesome</p>
        //         <div className={classes.SingleCommentLikeDislike}>
        //             <ThumbUpAltIcon stye={{fontSize : 10}} /> 23
        //             <ThumbDownIcon stye={{fontSize : 10}} /> 44
        //         </div>
        //         <div className={classes.CommentReplyContainer}>
        //             <div className={classes.CommentReply}>
        //                 <p><b>Name of reply</b></p>
        //                 <p>Reply over here</p>
        //             </div>
        //         </div>
        //         <div className={classes.CommentReplyContainer}>
        //             <div className={classes.CommentReply}>
        //                 <p><b>Name of reply</b></p>
        //                 <p>Reply over here</p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className={classes.SingleComment}>
        //         <p><b>Name of Comment</b></p>
        //         <p>Comment here </p>
        //         <div className={classes.SingleCommentLikeDislike}>
        //             <ThumbUpAltIcon stye={{fontSize : 10}} /> 23
        //             <ThumbDownIcon stye={{fontSize : 10}} /> 44
        //         </div>
        //         <div className={classes.CommentReplyContainer}>
        //             <div className={classes.CommentReply}>
        //                 <p><b>Name of reply</b></p>
        //                 <p>Reply over here</p>
        //             </div>
        //         </div>
        //     </div>
        
    )
}

export default Comments;