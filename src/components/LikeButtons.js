import React, { useState } from "react";

function LikeButtons({ video }) {
    const [likeData, setLikeData] = useState(video.upvotes)
    const [dislikeData, setDislikeData] = useState(video.downvotes)
    console.log("button", likeData)
    console.log("dislike", dislikeData)

    function increaseLikes() {
        setLikeData(likeData => likeData + 1)
    } 

    function increaseDislikes() {
        setDislikeData(dislikeData => dislikeData + 1)
    }

    return (
        <div>
            <button onClick={increaseLikes}>{likeData}👍</button>
            <button onClick={increaseDislikes}>{dislikeData}👎</button>
        </div>
    )
}

export default LikeButtons;
