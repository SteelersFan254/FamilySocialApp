import React, {Component} from 'react';
import Validation from 'react-validation';
import "../validation.js";


function mySQL() {
    
    const [state, setState] = useState({
        name: '',
        email: '',
        meg: ''
    });

    handleSubmit(event) {
        event.preventDefault()
        var data = {
            name: this.state.name,
            email: this.state.email
        }
        console.log(data)
        fetch("/users/new", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data == "success"){
               this.setState({msg: "Thanks for registering"});  
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }

    render() {
        return (
            <div className="container register-form">
                <Validation.components.Form onSubmit={this.handleSubmit} method="POST">
                    <label>Name</label>
                    <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='John' name='name' validations={['required']}/>
                    <label>Email</label>
                    <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='email@email.com' name='email' validations={['required', 'email']}/>
                    <div className="submit-section">
                        <Validation.components.Button className="btn btn-uth-submit">Submit</Validation.components.Button>
                    </div>
                </Validation.components.Form>
            </div>
        );
};

import React, { useState } from "react";
import Home from "./pages/Home";
import AlertContext from "./utils/AlertContext";

function App() {

  const [pageState, setPageState] = useState({
    display: false,
    theme: "success",
    onClick: (theme, display) => {
      // Remember, the setter method on state does not merge like this.setState does
      // We use the spread operator so that we don't lose our onClick method whenever the state is updated.
      setPageState({ ...pageState, theme, display });
    }
  });
  // App component that provides initial context values
  // Here we are overwritting the context object to be equal to the state of App
  return (
    <AlertContext.Provider value={pageState}>
      <Home />
    </AlertContext.Provider>
  );
}


export default App;