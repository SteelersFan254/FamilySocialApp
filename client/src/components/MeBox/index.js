import React, { useContext } from "react";
import './style.css';
import UserContext from "../../utils/UserContext";


function MeBox () {
    const context = useContext(UserContext);

    return(
        <div className="meBox">
        <div style={{height: "20%"}}>
            {context.firstName}&nbsp;{context.lastName}
        </div>
        <img src="https://via.placeholder.com/20" style={{width: "80%", margin: "0 0 0 10%"}} />
        </div>
    )
};

export default MeBox;