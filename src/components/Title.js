import React, {useState} from "react";

function Title ({videoTitle,videoViews, videoDate}) {
   return ( 
       <React.Fragment>
            <h1>{videoTitle}</h1>
            <p>{videoViews} views | Uploaded {videoDate}</p>
       </React.Fragment>
   )
}

export default Title;