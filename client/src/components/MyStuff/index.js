import React from "react";
import './style.css';
import { Link } from "react-router-dom";




function MyStuff() {

    return (
        <div className="myStuff">
            <div className="myStuffLinks">
            <Link style={{width: "100%"}}
                to="/profile"
                className={window.location.pathname === "/profile"}
            >
                Profile
            </Link><br/>
            <Link style={{margin: "0 auto"}}
                to="/profile/announcements"
                className={window.location.pathname === "/profile"}
            >
                My Announcements
            </Link><br/>
            <Link style={{width: "100%"}}
                to="/profile/events"
                className={window.location.pathname === "/profile"}
            >
                My Events
            </Link><br/>
            <Link style={{width: "100%"}}
                to="/settings"
                className={window.location.pathname === "/profile"}
            >
                Settings
            </Link>
            </div>
        </div>
    )
};

export default MyStuff;