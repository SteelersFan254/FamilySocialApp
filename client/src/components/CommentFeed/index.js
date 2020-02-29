import React from 'react';
import CommentBox from "../CommentBox"
function CommentFeed(props) {

    return (

        <div>

            <div>
                {props.comments.length ? (
                    <div>
                        {props.comments.slice(0).reverse().map(comment => (
                            <div key={comment._id}>
                                <CommentBox comment = {comment} />

                            </div>
                        ))}
                    </div>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </div>
        </div>
    )
};

export default CommentFeed;