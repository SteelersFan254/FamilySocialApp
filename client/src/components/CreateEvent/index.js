import React from "react";
import "./style.css"



  
function CreateEvent(props) {

    return (

        <div class="card eventCreate">
        <div class="card-body eventCreate-body">

            Create an Event
            <input
                name="comment"
            ></input>
            <button>Create</button>
        </div>
    </div>
    )
};

export default CreateEvent;