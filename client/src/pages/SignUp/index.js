import React, { useState } from 'react';
import API from "../../utils/API";
import './style.css';

function SignUp(props) {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState();
  // const [address, setAddress] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [profilePic, setProfilePic] = useState('');
  // const [filename, setFilename] = useState('Choose File');

  // const onChange = e => {
  //   setProfilePic(e.target.files[0].name);
  //   setFilename(e.target.files[0].name);
  //   console.log(e.target.files)
  // };

  // function handleSignupSubmit(event){
  //   event.preventDefault();
  //   console.log("sign up button working")
  //   API.signup({firstName, lastName, phoneNumber, address, email, password, profilePic}).then(response => console.log(response.data));
    
  // }

  return (
    <div className="signupBox">
      <h1>Signup</h1>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input name="firstName" type="text" value={props.firstName} onChange={props.handleSignupFirstNameInputChange}/><br/>
        
        <label htmlFor="lastName">Last Name: </label>
        <input name="lastName" type="text" value={props.lastName} onChange={props.handleSignupLastNameInputChange}/> <br/>
        
        <label htmlFor="phoneNumber">Phone Number: </label>
        <input name="phoneNumber" type="text" value={props.phoneNumber} onChange={props.handleSignupPhoneNumberInputChange}/> <br/>
        
        <label htmlFor="address">Adress: </label>
        <input name="address" type="text" value={props.address} onChange={props.handleSignupAddressInputChange}/> <br/>
        
        <label htmlFor="password">Password: </label>
        <input name="password" type="password" value={props.password} onChange={props.handleSignupPasswordInputChange}/> <br/>
        
        <label htmlFor="email">Email: </label>
        <input name="email" type="text" value={props.email} onChange={props.handleSignupEmailInputChange}/><br/>
        
        <label htmlFor="profilePic">Profile Picture</label>
        <input name="profilePic" type="text" value={props.profilePic} onChange={props.handleSignupProfilePicInputChange}></input>
          
        <button onClick={props.handleSignupSubmit}>Sign Up!</button>
        {/* <label htmlFor='customFile'>{filename}</label>
        <input
            type='file'
            onChange={onChange} 
        /> */}
      </div>    
    </div>
  );
}

export default SignUp;
