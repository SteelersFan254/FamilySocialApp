import React from 'react';
import "./style.css"

function PictureBox() {

    return (

        <div>
            <div className="infoBox">
               <div style={{ margin: "2%", fontSize:"48px" }}>
                    <p>First Last</p>
               </div>
               <div style={{ margin: "2% 2% 2% 2%"}}>
                   <img src="https://via.placeholder.com/300" style={{width: "100%"}} />
               </div>

            </div>
        </div>
    )
};

export default PictureBox;