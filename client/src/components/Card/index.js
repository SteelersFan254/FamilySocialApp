import React from "react";
import "./style.css"
import { PromiseProvider } from "mongoose";


function Card(props) {
    console.log(props)
    console.log(props.contact)
    return (
        <div className="contactCard">
            <img src={props.contact.profilePic} style={{ borderRadius: "50%", margin: "2%", height: "150px", width: "150px" }} />


            <div style={{ float: "right", textAlign: "left", width: "60%"}}>
                <p> {props.contact.firstName} {props.contact.lastName}</p>
                <p>Email: {props.contact.email}</p>
                <p>Phone Number: {props.contact.phoneNumber}</p>
                <p>Address: {props.contact.address}</p>
            </div>
        </div>
    )
};

export default Card;