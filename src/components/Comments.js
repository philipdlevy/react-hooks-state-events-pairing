import React from "react";

function Comments({ comments }) {
   
    const commentsList = comments.map((comment) => {
        return <div key={comment.id}>
            <h2>
                {comment.user}
            </h2>
            <span>
                <p>
                    {comment.comment}
                </p>
            </span>
        </div>
    })

    return (<div>
        {comments.length > 0 ? <h1>{comments.length} Comments</h1> : null}
        {commentsList}
    </div>) 

}

export default Comments;
