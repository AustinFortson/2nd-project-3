import axios from "axios";

export default {
  
  getTools: function() {
    return axios.get("/api/tools");
    //the return is a JSON object of the tools
  },
  
  getTool: function(name) {
    return axios.get("/api/tools/" + name);
  },
  // Deletes the book with the given id
  deleteUser: function(name) {
    return axios.delete("/api/users/" + name);
  },
  getUser: function(name) {
    return axios.get("/api/users/" + name);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/", userData);
  }
};