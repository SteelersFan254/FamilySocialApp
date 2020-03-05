import React from "react";
import "./style.css"



  
function CommentCreate(props) {

    return (

        <div class="card commentCreate">
        <div class="card-body commentCreate-body">

            Post a comment:
            <input onChange={props.handleInputChange}
                name="comment"
            ></input>
            <button onClick={props.handleFormSubmit}>Comment</button>
        </div>
    </div>
    )
};

export default CommentCreate;