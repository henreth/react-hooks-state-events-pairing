import userEvent from "@testing-library/user-event";
import React, {useState} from "react";
import Comment from "./Comment";

function CommentList ({showing,videoComments}) {
    return ( 
        <div className={showing ? "visible" : "hidden"} >
        <hr/>
        <h2>{videoComments.length} Comments </h2>
        {videoComments.map((comment) => (
          <Comment 
            videoUser={comment.user}
            videoComment={comment.comment}/>
        ))}
        </div>
    )
}

export default CommentList;