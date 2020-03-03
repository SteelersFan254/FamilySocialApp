import React, { useContext } from "react";
import "./style.css"
import UserContext from "../../utils/UserContext";


function PictureBox() {
    const context = useContext(UserContext);

    return (

        <div>
            <div className="infoBox">
               <div style={{ margin: "2%", fontSize:"48px" }}>
                    <p>{context.firstName}&nbsp;{context.lastName}asdfasdfas</p>
               </div>
               <div style={{ margin: "2% 2% 2% 2%"}}>
                   <img src="https://via.placeholder.com/300" style={{width: "100%"}} />
               </div>

            </div>
        </div>
    )
};

export default PictureBox;