import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
    return (
        <div>
            <div className="navbar navbarDiv">

                <div className="profileBox">
                <Link
                        to="/signup"
                        className={window.location.pathname === "/signup"}
                    >
                        Sign Up
                    </Link>
                    <Link
                        to="/login"
                        className={window.location.pathname === "/login"}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
