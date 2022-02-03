import React, {useState} from "react";

function Buttons ({videoUp,onUpClick, videoDown, onDownClick}) {
   return ( 
       <React.Fragment>
        <button onClick={onUpClick}>{videoUp} 👍</button>
        <button onClick={onDownClick}>{videoDown} 👎</button>
       </React.Fragment>
   )
}

export default Buttons;