import React from "react";
import "./style.css"


function Card(props) {
    console.log(props)
    console.log(props.contact)
    return (
        <div class="contactCard">
                <img src="https://via.placeholder.com/150" style={{ borderRadius: "50%", margin: "1%" }} />
                
                
                {/* <div>
                    
                    {props.contact.email}
                    {props.contact.password}
                </div> */}
            </div>
    )
};

export default Card;