import axios from "axios";

export default {

  saveComment: function(commentData) {
    console.log("going to api.js")
    return axios.post("/api/home", commentData);
    
  }
};
