import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";



function Login() {
    return (
        <div>
                <div className="App">
      <div>
        <Link
            to="/signup"
            className={window.location.pathname === "/signup"}
        >
            <p>SIGNUP</p>
        </Link>
      </div>    
    </div>
        </div>
    )
};

export default Login;