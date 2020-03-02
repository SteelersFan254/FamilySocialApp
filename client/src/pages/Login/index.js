import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./style.css";



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleButtonSubmit() {
        console.log(email, password);
    }

    return (
        <div>
                <div className="loginBox">
                    <div className="loginBoxTitle">
                        <span style={{fontSize: "48px"}}>SIGN IN</span>
                    </div>
                    <input name="email" className="loginEmailInput" type="text" placeholder="Email" value={email} onChange={(event) => { setEmail(event.target.value)}}/>
                    <input name="password" className="loginPasswordInput" placeholder="Password" type="password" value={password} onChange={(event) => { setPassword(event.target.value)}}/>
                    <input name="submit" className="loginSubmitButton" type="button" onClick={{handleButtonSubmit}}></input>
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