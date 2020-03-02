import React from "react";
import "./style.css"


function Card(props) {
    console.log(props)
    console.log(props.contact)
    return (
        <div className="contactCard">
                <img src="https://via.placeholder.com/150" style={{ borderRadius: "50%", margin: "2%" }} />
                
                
                <div style={{float:"right"}}>
                    
                    {props.contact.email}
                    {props.contact.password}
                </div>
            </div>
    )
};

export default Card;