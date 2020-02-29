import React from "react";
import "./style.css"



  
function CommentCreate(props) {

    return (
        <div className="commentCreateDiv">
            Write a comment
            <input onChange={props.handleInputChange}
                name="comment"
            ></input>
            <button onClick={props.handleFormSubmit}>Comment</button>
        </div>
    )
};

export default CommentCreate;