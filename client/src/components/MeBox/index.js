import React, { useContext } from "react";
import './style.css';
import UserContext from "../../utils/UserContext";


function MeBox () {
    const context = useContext(UserContext);
    console.log(context.profilePic)
    return(
        <div className="meBox">
        <div className="meBoxName">
            {context.firstName}&nbsp;{context.lastName}
        </div>
        <img src={context.profilePic} style={{width: "80%", margin: "0 0 0 10%"}} />
        </div>
    )
};

export default MeBox;