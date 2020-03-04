import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API.js"
import axios from "axios";




function Login(props) {
    // const [email, setEmail] = useState(props.email);
    // const [password, setPassword] = useState(props.password);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);


    // function handleButtonSubmit(event) {
    //     event.preventDefault();
    //     API.login(email, password).then(response => {
    //         setIsLoggedIn(true)
    //         console.log(response)
    //     })
    // }

    return (
        <div>
            <div className="loginBox">
                <div className="loginBoxTitle">
                    <span style={{ fontSize: "48px" }}>SIGN IN</span>
                </div>
                <input 
                    name="email" 
                    className="loginEmailInput" 
                    type="text" placeholder="Email" 
                    value={props.email} 
                    onChange={props.handleEmailInputChange} 
                />
                <input 
                    name="password" 
                    className="loginPasswordInput" 
                    placeholder="Password" 
                    type="password" 
                    value={props.password} 
                    onChange={props.handlePasswordInputChange} 
                />
                <button 
                    className="loginSubmitButton" 
                    onClick={props.handleButtonSubmit}
                >
                    SUBMIT
                </button>>
                </div>
        </div>
    )
};

export default Login;