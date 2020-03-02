import axios from "axios";

export default {

  saveComment: function (commentData) {
    console.log("going to api.js")
    return axios.post("/api/home", commentData);

  },

  getComments: function () {
    console.log("successfully went to api.js")
    return axios.get("/api/home");
  },

  getContacts: function () {
    console.log("successfully went to api.js")
    return axios.get("/api/auth/signup");
  },

  signup: (email, password) => {
    console.log("getting to API.js folder")
    return axios.post("/api/auth/signup", { email, password });
  }
};


