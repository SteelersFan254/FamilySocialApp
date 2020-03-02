import React from "react";
import "./style.css"



  
function CreateEvent(props) {

    return (

        <div class="card eventCreate">
        <div class="card-body eventCreate-body">

            Write a comment
            <input
                name="comment"
            ></input>
            <button>Comment</button>
        </div>
    </div>
    )
};

export default CreateEvent;