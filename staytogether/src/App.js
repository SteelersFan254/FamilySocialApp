import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Maps from "./pages/Map";
import Tree from "./pages/Tree";
import Navbar from "./components/Navbar";
//import LoginNavbar from "./components/LoginNavbar";
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <div className="container">
        {/* <Route exact path="/" component={LoginNavbar} /> */}
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/map" component={Maps} />
        <Route exact path="/tree" component={Tree} />
      </div>
      </div>
    </Router>
  )
};

export default App;
