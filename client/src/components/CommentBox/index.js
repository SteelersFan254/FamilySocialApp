import React, {useState} from "react";
import API from "../../utils/API";




  
function CommentBox(props) {

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

export default CommentBox;