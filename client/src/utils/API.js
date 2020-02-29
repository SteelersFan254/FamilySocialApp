import axios from "axios";

export default {

  saveComment: function(commentData) {
    console.log("going to api.js")
    return axios.post("/api/home", commentData);
    
  },

  getComments: function() {
    console.log("successfully went to api.js")
    return axios.get("/api/home");
  }
};
