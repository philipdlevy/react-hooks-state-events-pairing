import React from "react";

function CommentButton({ handleCommentButton, showComments }) {

    return (
        <div className="CommentsButton">
            <button onClick= {handleCommentButton}>
                {showComments === true ? "Hide Comments" : "Show Comments"}  
                </button>
        </div>
    )
}

export default CommentButton;