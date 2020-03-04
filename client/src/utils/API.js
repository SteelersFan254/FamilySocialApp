import axios from "axios";

export default {


  signin: (email, password) => {
    return axios.post("/api/auth/signin", { email, password });
  },
  signout: () => {
    return axios.get("/api/auth/signout");
  },
  signup: (email, password) => {
    return axios.post("/api/auth/signup", { email, password });
  },


  

  saveComment: function (commentData) {
    return axios.post("/api/home", commentData);
  },

  getComments: function () {
    return axios.get("/api/home");
  },

  getUser: function (email) {
    return axios.get("/profile", email);
  },

  getContacts: function () {
    console.log("console request getting to api.js")
    return axios.get("/contacts");
  },

  signup: (info) => {
    console.log("signup getting to api.js page")
    return axios.post("/api/auth/signup", info);
  },
  login: (email, password) => {
    return axios.post("/api/auth/login", {email, password})
  },

};


