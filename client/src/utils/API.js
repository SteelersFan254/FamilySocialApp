import axios from "axios";

export default {

  saveComment: function (commentData) {
    return axios.post("/api/home", commentData);

  },

  getComments: function () {
    return axios.get("/api/home");
  },

  getCommentCreator: function () {
    return axios.get("/api/home", );
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
    console.log(info)
    return axios.post("/api/auth/signup", info);
  },
  login: (email, password) => {
    console.log("signup is getting to to api login in api.js" + email + password);
    return axios.post("/api/auth/login", {email, password})
  },
  logout: () => {
      return axios.get("/api/auth/signout");
  }

};


