import React from 'react';
import "./style.css"

function InfoBox() {

    return (

        <div>
            <div className="infoBox">
               <div style={{margin: "2%"}}>
                   <p style={{fontSize: "48px"}}> INFORMATION</p>
               </div>
               <div>
                   <p>Phone Number: </p>
                   <p>Email: </p>
                   <p>Adrress: </p>
               </div>

            </div>
        </div>
    )
};

export default InfoBox;