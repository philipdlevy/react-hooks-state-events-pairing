import video from "../data/video.js";
import React, {useState} from "react";
import CommentButton from "./CommentButton";
import LikeButtons from "./LikeButtons";
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);
  const [showComments, setShowComments] = useState(true)
  const [displayComments, setDisplayComments] = useState(video.comments)

  function handleCommentButton() {
    displayComments.length > 0 ? setDisplayComments([]) : setDisplayComments(video.comments)
    setShowComments((showComments) => !showComments);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <LikeButtons video={video}/> 
      <CommentButton handleCommentButton={handleCommentButton} showComments={showComments} />
      <div 
      style={{ borderTop: "2px solid #000000 ", 
      marginLeft: 20, 
      marginRight: 20 }}>
      </div>
      <Comments comments={displayComments} />
    </div>
  );
}

export default App;
