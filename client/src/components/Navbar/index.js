import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
    return (
        <div className="navbar navbarDiv">
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

    );
}

export default Navbar;
