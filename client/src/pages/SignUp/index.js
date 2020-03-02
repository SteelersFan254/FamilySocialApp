import React, { useState } from 'react';
import API from "../../utils/API";
import './style.css';

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  



  function handleSignupSubmit(event){
      console.log(email, password)
    event.preventDefault();
    API.signup(email, password).then(response => console.log(response.data))
  }

  return (
    <div className="signupBox">
      <h1>Signup</h1>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input name="firstName" type="text" value={firstName} onChange={(event) => { setFirstName(event.target.value)}}/><br/>
        <label htmlFor="lastName">Last Name: </label>
        <input name="lastName" type="text" value={lastName} onChange={(event) => { setLastName(event.target.value)}}/> <br/>
        <label htmlFor="phoneNumber">Phone Number: </label>
        <input name="phoneNumber" type="text" value={phoneNumber} onChange={(event) => { setPhoneNumber(event.target.value)}}/> <br/>
        <label htmlFor="address">Adress: </label>
        <input name="address" type="text" value={address} onChange={(event) => { setAddress(event.target.value)}}/> <br/>
        <label htmlFor="password">Password: </label>
        <input name="password" type="password" value={password} onChange={(event) => { setPassword(event.target.value)}}/> <br/>
        <label htmlFor="email">Email: </label>
        <input name="email" type="text" value={email} onChange={(event) => { setEmail(event.target.value)}}/><br/>

        <button onClick={handleSignupSubmit}>Sign Up!</button>
      </div>    
    </div>
  );
}

export default SignUp;
