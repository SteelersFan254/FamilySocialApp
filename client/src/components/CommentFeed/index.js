import React, { useState } from 'react';
import API from "../../utils/API";

function CommentFeed() {
    const [comments, setComments] = useState([])

    function loadComments() {
        console.log("load comment function working when clicked on")
        API.getComments()
            .then(res =>
                setComments(res.data)
            )
            .catch(err => console.log(err));
    };
    return (

        <div>
            <button onClick={loadComments}>See Comment</button>
            <div>
                {comments.length ? (
                    <li>
                        {comments.map(comment => (
                            <ul key={comment._id}>
                                <strong>
                                    {comment.comment}
                                </strong>
                            </ul>
                        ))}
                    </li>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </div>
        </div>
    )
};

export default CommentFeed;