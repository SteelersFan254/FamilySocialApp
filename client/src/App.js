
import axios from "axios";
import API from "./utils/API";
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Maps from "./pages/Map";
import Tree from "./pages/Tree";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
//import LoginNavbar from "./components/LoginNavbar";
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [privateInfo, setPrivateInfo] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignupSubmit(event){
    event.preventDefault();
    console.log("button is clicking")
    API.signup(email, password).then(response => console.log(response.data))
  }

  function handleSigninSubmit(event){
    event.preventDefault();
    API.signin(email, password).then(response => {
      setIsLoggedIn(true);
      axios.get("/api/secret/number").then(response => {
        setPrivateInfo({ secret: response.data})
      })
    })
  }
  function handleSignoutSubmit(event){
    event.preventDefault();
    API.signout().then(response => {
      setIsLoggedIn(false);
    })
  }

  function renderPrivateSection(){
    if(isLoggedIn){
      return <div>
        <h1>{privateInfo.secret}is authenticated</h1>
      </div>
    }
  }


  return (
    
    <Router>
      <div>    <div className="App">
      <h1>Signup</h1>
      <div>
        <label htmlFor="email">Email: </label>
        <input name="email" type="text" value={email} onChange={(event) => { setEmail(event.target.value)}}/><br/>
        <label htmlFor="email">Password: </label>
        <input name="password" type="password" value={password} onChange={(event) => { setPassword(event.target.value)}}/> <br/>
        <button onClick={handleSignupSubmit}>Sign Up!</button>
        <button onClick={handleSigninSubmit}>Sign In!</button>
        <button onClick={handleSignoutSubmit}>Sign Out!</button>
      </div>
      {
        renderPrivateSection()
      }      
    </div>
        {/* <Route exact path="/" component={LoginNavbar} /> */}
        <Navbar />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home}/>
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/map" component={Maps} />
        <Route exact path="/tree" component={Tree} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  )
  
};

export default App;
