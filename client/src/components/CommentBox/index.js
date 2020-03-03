import React from 'react';
import "./style.css"

function CommentBox(props) {

    return (

        <div>
            <div className="commentBox">
                    <p className="comment">{props.comment.comment}
                    </p>
            </div>
        </div>
    )
};

export default CommentBox;