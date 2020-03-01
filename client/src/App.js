import React from 'react';
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

  return (
    <Router>
      <div>
        {/* <Route exact path="/" component={LoginNavbar} /> */}
        <Navbar />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/map" component={Maps} />
        <Route exact path="/tree" component={Tree} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  )
};

export default App;
