import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
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
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
    profilePic: ""
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState('');

  const history = useHistory();

  function handleButtonSubmit(event) {
    event.preventDefault();
    API.login(email, password)
    .then(response => {
      setIsLoggedIn(true);
      console.log(response.data.firstName + " " + response.data.lastName + " you are logged in!")
      setUser(response.data)
      history.push("/home")
    })

  }
  function handleSignupSubmit(event){
    event.preventDefault();
    console.log("sign up button working")
    API.signup({firstName, lastName, phoneNumber, address, email, password, profilePic})
    .then(response => {
      console.log("signup is getting to API.login. here is the response" + response.data)
      console.log("here is the password" +response.data.password)
      API.login(email, password)
      .then(response => {
        setIsLoggedIn(true);
        setUser(response.data);
        history.push("/home");
      })
    });
    
  }
  function logout(event) {
    API.logout().then(response => {
      setIsLoggedIn(false);
    })
  }

  const handleSignupFirstNameInputChange = (event) => { 
    setFirstName(event.target.value)
  };
  const handleSignupLastNameInputChange = (event) => { 
    setLastName(event.target.value)
  };
  const handleSignupPhoneNumberInputChange = (event) => { 
    setPhoneNumber(event.target.value)
  };
  const handleSignupAddressInputChange = (event) => { 
    setAddress(event.target.value)
  };
  const handleSignupPasswordInputChange = (event) => { 
    setPassword(event.target.value)
  };
  const handleSignupEmailInputChange = (event) => { 
    setEmail(event.target.value)
  };
  const handleSignupProfilePicInputChange = (event) => { 
    setProfilePic(event.target.value)
  };








  const handleEmailInputChange = event => {
    setEmail(event.target.value);
  };
  const handlePasswordInputChange = event => {
    setPassword(event.target.value);
  };


  function renderPrivateRoutes() {
    return <>
      <Navbar
        logout={logout}
      />
      <Switch>

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

    </>
  }

  function renderPublicRoutes() {
    return <>

      <LoginNavbar />
      <Switch>
        <Route exact path="/">
          <Login
            handleEmailInputChange={handleEmailInputChange}
            handlePasswordInputChange={handlePasswordInputChange}
            handleButtonSubmit={handleButtonSubmit}
            email={email}
            password={password}
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
          <SignUp 
            handleSignupSubmit={handleSignupSubmit}
            handleSignupFirstNameInputChange={handleSignupFirstNameInputChange}
            handleSignupLastNameInputChange={handleSignupLastNameInputChange}
            handleSignupPhoneNumberInputChange={handleSignupPhoneNumberInputChange}
            handleSignupAddressInputChange={handleSignupAddressInputChange}
            handleSignupPasswordInputChange={handleSignupPasswordInputChange}
            handleSignupEmailInputChange={handleSignupEmailInputChange}
            handleSignupProfilePicInputChange={handleSignupProfilePicInputChange}
            firstName={firstName}
            lastName={lastName}
            phoneNumber={phoneNumber}
            address={address}
            password={password}
            email={email}
            profilePic={profilePic}
          />
        </Route>
      </Switch>
    </>
  }


    return (

        <UserContext.Provider value={user}>
          <div>

            {
              (isLoggedIn) && renderPrivateRoutes()
            }

            {
              (!isLoggedIn) && renderPublicRoutes()
            }

          </div>
        </UserContext.Provider>

    )
  };

//   return (
//     <Router>
//       <UserContext.Provider value={user}>
//         <div>
//           <Navbar
//             logout={logout}
//           />
//           <Switch>
//             <Route exact path="/">
//               <Login
//                 handleEmailInputChange={handleEmailInputChange}
//                 handlePasswordInputChange={handlePasswordInputChange}
//                 handleButtonSubmit={handleButtonSubmit}
//               />
//             </Route>
//             <Route exact path="/login">
//               <Login
//                 handleEmailInputChange={handleEmailInputChange}
//                 handlePasswordInputChange={handlePasswordInputChange}
//                 handleButtonSubmit={handleButtonSubmit}
//                 email={email}
//                 password={password}
//               />
//             </Route>
//             <Route exact path="/signup">
//               <SignUp />
//             </Route>
//             <Route exact path="/home">
//               <Home />
//             </Route>
//             <Route exact path="/contacts">
//               <Contacts />
//             </Route>
//             <Route exact path="/map">
//               <Maps />
//             </Route>
//             <Route exact path="/tree">
//               <Tree />
//             </Route>
//             <Route exact path="/profile">
//               <Profile
//                 user={user}
//               />
//             </Route>
//           </Switch>
//         </div>
//       </UserContext.Provider>
//     </Router>

//   )
// };

export default App;
