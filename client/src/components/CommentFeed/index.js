import React, { useState } from 'react';
import API from "../../utils/API";

function CommentFeed(props) {

    return (

        <div>
            <button onClick={props.loadComments}>See Comment</button>
            <div>
                {props.comments.length ? (
                    <li>
                        {props.comments.map(comment => (
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