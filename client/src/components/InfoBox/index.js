import React, { useContext } from 'react';
import "./style.css"
import UserContext from "../../utils/UserContext";

function InfoBox() {
    const context = useContext(UserContext);
    return (

        <div>
            <div className="infoBox">
               <div style={{margin: "2%"}}>
                   <p style={{fontSize: "48px"}}> INFORMATION</p>
               </div>
               <div>
                   <p>Phone Number: {context.phoneNumber}</p>
                   <p>Email: {context.email}</p>
                   <p>Address: {context.address}</p>
               </div>

            </div>
        </div>
    )
};

export default InfoBox;