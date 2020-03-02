import React, { useState } from 'react';
import API from "../../utils/API";
import './style.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignupSubmit(event){
      console.log(email, password)
    event.preventDefault();
    API.signup(email, password).then(response => console.log(response.data))
  }

  return (
    <div className="App">
      <h1>Signup</h1>
      <div>
        <label htmlFor="email">Email: </label>
        <input name="email" type="text" value={email} onChange={(event) => { setEmail(event.target.value)}}/><br/>
        <label htmlFor="email">Password: </label>
        <input name="password" type="password" value={password} onChange={(event) => { setPassword(event.target.value)}}/> <br/>
        <button onClick={handleSignupSubmit}>Sign Up!</button>
      </div>    
    </div>
  );
}

export default Login;
