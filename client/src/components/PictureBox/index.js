import React, { useContext } from "react";
import "./style.css"
import UserContext from "../../utils/UserContext";


function PictureBox() {
    const context = useContext(UserContext);

    return (

        <div>
            <div className="infoBox">
               <div className="infoBoxName">
                    <p>{context.firstName}&nbsp;{context.lastName}zxcvz</p>
               </div>
               <div style={{ margin: "2% auto 2%"}}>
                   <img src={context.profilePic} style={{width: "80%"}} />
               </div>

            </div>
        </div>
    )
};

export default PictureBox;