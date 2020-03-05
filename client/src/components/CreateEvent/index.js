import React from "react";
import "./style.css"



  
function CreateEvent(props) {

    return (

        <div class="card eventCreate">
        <div class="card-body eventCreate-body">

            Post an event:
            <input
                name="comment"
            ></input>
            <button>Comment</button>
        </div>
    </div>
    )
};

export default CreateEvent;