import React from "react";

const UserContext = React.createContext({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
});

export default UserContext;
