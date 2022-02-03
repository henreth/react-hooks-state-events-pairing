import React, {useState} from "react";
import CommentList from "./CommentList";

//className={"App " + (isDarkMode ? "dark" : "light")}

function Comments ({videoComments}) {
    let [showing,setShowing] = useState(false);

function handleClick () {
    setShowing(!showing)
}

   return ( 
       <React.Fragment>
        <button 
            className='comment-button'
            onClick={handleClick}>
            {showing ? "Hide Comments" : "Show Comments"}
            </button>
        <CommentList 
            showing={showing}
            videoComments={videoComments} />
       </React.Fragment>
   )
}

export default Comments;