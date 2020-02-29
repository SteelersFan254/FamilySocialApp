import React from "react";





  
function CommentCreate(props) {

    return (
        <div>
            Write a comment
            <input onChange={props.handleInputChange}
                name="comment"
            ></input>
            <button onClick={props.handleFormSubmit}>Comment</button>
        </div>
    )
};

export default CommentCreate;