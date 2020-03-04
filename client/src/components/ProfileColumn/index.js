import React from "react";
import "./style.css";
import MeBox from "../MeBox"
import MyStuff from "../MyStuff"

function ProfileColumn() {
    return (
        <div className="profileColumn">
            <MeBox />
            <MyStuff />
        </div>
    )
};

export default ProfileColumn;