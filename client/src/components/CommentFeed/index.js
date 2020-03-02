import React from 'react';
import CommentBox from "../CommentBox"
import CommentCreate from '../CommentCreate';
import "./style.css"
function CommentFeed(props) {

    return (

        <div className="commentFeed">
            <CommentCreate
                handleInputChange={props.handleInputChange}
                handleFormSubmit={props.handleFormSubmit}
            />
            {props.comments.length ? (
                <div style={{ height: "100%" }}>

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