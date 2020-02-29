import React from 'react';
import "./style.css"

function CommentBox(props) {

    return (

        <div>
            <div className="card commentBox">
                <div className="card-body commentBox-body">
                <strong>
                                    {props.comment.comment}
                                </strong>
                </div>
            </div>
        </div>
    )
};

export default CommentBox;