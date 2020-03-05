import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar(props) {
    return (
        <div>
            <div className="navbar navbarDiv">
                <div className="linkBox">
                    <Link
                        to="/home"
                        className={window.location.pathname === "/home"}
                    >
                        Home
                    </Link>
                    <Link
                        to="/contacts"
                        className={window.location.pathname === "/contacts"}
                    >
                        Contacts
                    </Link>
                    <Link
                        to="/map"
                        className={window.location.pathname === "/map"}
                    >
                        Map
                    </Link>
                    <Link
                        to="/tree"
                        className={window.location.pathname === "/tree"}
                    >
                        Tree
                    </Link>
                </div>
                <div className="profileBox">
                <Link
                        to="/profile"
                        className={window.location.pathname === "/profile"}
                    >
                        Profile
                    </Link>
                    <Link
                        to="/login"
                        className={window.location.pathname === "/login"}
                        onClick={props.logout}
                    >
                        Logout
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
