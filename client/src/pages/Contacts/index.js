import React, { useState } from 'react';
import API from "../../utils/API.js"
import "./style.css"
import Card from "../../components/Card"

function Contacts() {
    const [contacts, setContacts] = useState([])


        API.getContacts()
            .then(response => {
                setContacts(response.data)
                console.log(contacts)
            }
            )
            .catch(err => console.log(err));


    return (
        <div>
        <div className="contactBox">
            <div style={{clear:"right", width: "100%", margin: "0 2%"}}>
                <p style={{ color: "white", fontSize: "48px"}}>Contacts</p>
            </div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            {contacts.length ? (
                <div style={{ height: "100%" }}>

                    {contacts.map(contact => (

                        <Card contact={contact} key={contact._id} />


                    ))}
                </div>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </div>
        </div>
    )
};

export default Contacts;