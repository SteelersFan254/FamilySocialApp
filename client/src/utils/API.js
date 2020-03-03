import axios from "axios";

export default {

  saveComment: function (commentData) {
    return axios.post("/api/home", commentData);

  },

  getComments: function () {
    return axios.get("/api/home");
  },

  getUser: function () {
    return axios.get("/profile");
  },

  getContacts: function () {
    return axios.get("/api/auth/signup");
  },

  signup: (info) => {
    return axios.post("/api/auth/signup", info);
  },
  login: (email, password) => {
    console.log(email, password);
    return axios.post("/api/auth/login", {email, password})
  },

};


