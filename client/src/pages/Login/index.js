import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API.js"
import axios from "axios";




function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    function handleButtonSubmit(event) {
        event.preventDefault();
        API.login(email, password).then(response => {
            setIsLoggedIn(true)
            console.log("logged in")
        })
    }

    return (
        <div>
            <div className="loginBox">
                <div className="loginBoxTitle">
                    <span style={{ fontSize: "48px" }}>SIGN IN</span>
                </div>
                <input name="email" className="loginEmailInput" type="text" placeholder="Email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                <input name="password" className="loginPasswordInput" placeholder="Password" type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                <button className="loginSubmitButton" onClick={handleButtonSubmit}>SUBMIT</button>>
                </div>
            <Link
                to="/signup"
                className={window.location.pathname === "/signup"}
            >
                <p>SIGNUP</p>
            </Link>

        </div>
    )
};

export default Login;