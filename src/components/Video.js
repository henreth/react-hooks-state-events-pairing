import React, {useState} from "react";

function Video ({videoURL, videoTitle}) {
   return ( <iframe
        width="919"
        height="525"
        src={videoURL}
        frameBorder="0"
        allowFullScreen
        title={videoTitle}
      />
   )

}

export default Video;