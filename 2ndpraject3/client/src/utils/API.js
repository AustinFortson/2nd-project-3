import axios from "axios";

export default {
  // Gets all books
  getTools: function() {
    return axios.get("/api/tools");
  },
  // Gets the book with the given id
  getTool: function(id) {
    return axios.get("/api/tools/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/", userData);
  }
};