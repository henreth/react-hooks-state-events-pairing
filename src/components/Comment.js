import React, {useState} from "react";

function Comment ({videoUser,videoComment}) {
   return ( 
       <React.Fragment>
        <h4>{videoUser}</h4>
        <p>{videoComment}</p>
       </React.Fragment>
   )
}

export default Comment;