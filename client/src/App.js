import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import API from "./utils/API.js"
import UserContext from "./utils/UserContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Maps from "./pages/Map";
import Tree from "./pages/Tree";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import LoginNavbar from "./components/LoginNavbar";
import './App.css';


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  function handleButtonSubmit(event) {
    // event.preventDefault();
    API.login(email, password).then(response => {
      setIsLoggedIn(true);
      console.log(response.data.firstName + " " + response.data.lastName + " you are logged in!")
      setUser(response.data)
    })

  }
  // function renderPrivateRoutes() {
  //   return <>
  //     <Navbar />
  //     <Switch>

  //       <Route exact path="/home">
  //         <Home />
  //       </Route>
  //       <Route exact path="/contacts">
  //         <Contacts />
  //       </Route>
  //       <Route exact path="/map">
  //         <Maps />
  //       </Route>
  //       <Route exact path="/tree">
  //         <Tree />
  //       </Route>
  //       <Route exact path="/profile">
  //         <Profile
  //           user={user}
  //         />
  //       </Route>
  //     </Switch>

  //   </>
  // }

  // function renderPublicRoutes() {
  //   return <>

  //     <LoginNavbar />
  //     <Switch>
  //       <Route exact path="/">
  //         <Login
  //           handleEmailInputChange={handleEmailInputChange}
  //           handlePasswordInputChange={handlePasswordInputChange}
  //           handleButtonSubmit={handleButtonSubmit}
  //         />
  //       </Route>
  //       <Route exact path="/login">
  //         <Login
  //           handleEmailInputChange={handleEmailInputChange}
  //           handlePasswordInputChange={handlePasswordInputChange}
  //           handleButtonSubmit={handleButtonSubmit}
  //           email={email}
  //           password={password}
  //         />
  //       </Route>
  //       <Route exact path="/signup">
  //         <SignUp />
  //       </Route>
  //     </Switch>
  //   </>
  // }

  const handleEmailInputChange = event => {
    setEmail(event.target.value);
  };
  const handlePasswordInputChange = event => {
    setPassword(event.target.value);
  };

  function renderPrivateSection() {
    if (isLoggedIn){
      return <div><h1>Logged in</h1></div>
    }
  }

  return (
    
    <Router>
      <UserContext.Provider value={user}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Login
                handleEmailInputChange={handleEmailInputChange}
                handlePasswordInputChange={handlePasswordInputChange}
                handleButtonSubmit={handleButtonSubmit}
              />
            </Route>
            <Route exact path="/login">
              <Login
                handleEmailInputChange={handleEmailInputChange}
                handlePasswordInputChange={handlePasswordInputChange}
                handleButtonSubmit={handleButtonSubmit}
                email={email}
                password={password}
              />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/contacts">
              <Contacts />
            </Route>
            <Route exact path="/map">
              <Maps />
            </Route>
            <Route exact path="/tree">
              <Tree />
            </Route>
            <Route exact path="/profile">
              <Profile
                user={user}
              />
            </Route>
          </Switch>



          {/* {
            (isLoggedIn) && renderPrivateRoutes()
          }

          {
            (!isLoggedIn) && renderPublicRoutes()
          } */}

          {/* <Route exact path="/login" render={(props) => <Login {...props} handleEmailInputChange={handleEmailInputChange} handlePasswordInputChange={handlePasswordInputChange} handleButtonSubmit={handleButtonSubmit} />} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/map" component={Maps} />
        <Route exact path="/tree" component={Tree} />
        <Route exact path="/profile" component={Profile} /> */}
          {/* <Route>
            <Redirect to="/" />
          </Route> */}
        </div>
      </UserContext.Provider>
    </Router>

  )
  
};

export default App;
