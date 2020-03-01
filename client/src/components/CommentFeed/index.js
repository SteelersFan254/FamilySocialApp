import React from 'react';
import CommentBox from "../CommentBox"
import CommentCreate from '../CommentCreate';
function CommentFeed(props) {

    return (

        <div>
            {props.comments.length ? (
                <div>
                    <CommentCreate
                        handleInputChange={props.handleInputChange}
                        handleFormSubmit={props.handleFormSubmit}
                    />
                    {props.comments.slice(0).reverse().map(comment => (

                        <CommentBox comment={comment} key={comment._id} />


                    ))}
                </div>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </div>
    )
};

export default CommentFeed;