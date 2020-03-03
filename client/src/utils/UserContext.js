import React from "react";

const UserContext = React.createContext({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
  email: "",
  password: "",
});

export default UserContext;
