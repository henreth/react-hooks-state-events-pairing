import video from "../data/video.js";
import React, {useState} from "react";
import Video from "./Video";
import Title from "./Title";
import Buttons from "./Buttons";
import Comments from "./Comments";

//Main
//-> Video
//-> Title (and View Count)
//-> Buttons
//-> Comments (button)
//----> Comments


function App() {
  let [upVotes, setVideoUp] = useState(video.upvotes);
  let [downVotes, setVideoDown] = useState(video.downvotes);


  function handleIncreaseUp () {
      setVideoUp(upVotes++);
  }

  function handleIncreaseDown () {
      setVideoDown(downVotes++);
  }

  return (
    <div className="App">
      <Video 
        videoURL={video.embedUrl}
        videoTitle={video.title} />
      <Title 
        videoTitle={video.title}
        videoDate={video.createdAt}
        videoViews={video.views}/>
      <Buttons 
        videoUp={upVotes}
        onUpClick={handleIncreaseUp}
        videoDown={downVotes}
        onDownClick={handleIncreaseDown}
        />
      <Comments 
        videoComments={video.comments}/>
    </div>
  );
}

export default App;
