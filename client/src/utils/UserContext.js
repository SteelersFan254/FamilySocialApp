import React from "react";

const UserContext = React.createContext({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
    profilePic: ""
});

export default UserContext;
