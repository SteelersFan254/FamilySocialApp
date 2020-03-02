import React, { useState, useEffect } from 'react';
import API from "../../utils/API.js"
import "./style.css"
import Card from "../../components/Card"

function Contacts() {
    const [contacts, setContacts] = useState([])

    useEffect(()=>{
        API.getContacts()
            .then(response => {
                setContacts(response.data)
                console.log(contacts)
            }
            )
            .catch(err => console.log(err));
        }, []);


    return (
        <div>
        <div className="contactBox">
            <div style={{width: "100%", height: "10%"}}>
                <p style={{ color: "white", fontSize: "48px"}}>Contacts</p>
            </div>

            {contacts.length ? (
                contacts.map(contact => (

                        <Card contact={contact} key={contact._id} />


                    ))
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </div>
        </div>
    )
};

export default Contacts;