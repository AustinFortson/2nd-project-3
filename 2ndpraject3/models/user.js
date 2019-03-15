const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nameFirst: {
    type: String,
    required: true
  },
  nameLast: {
    type: String,
    required: true
  },
  nameAddress: {
    type: String
  },
  nameCity: {
    type: String
  },
  nameState: {
    type: String
  },
  nameZipcode: {
    type: Number
  }, 
  nameEmail: {
    type: String
  },
  nameDOB:{
    type: Date,
    required: true
  },
  nameDriverNum:{
    type: Number,
    required: true
  },
  nameDriverExp:{
    type: Date,
    required: true
  },
  nameDriverState: {
    type: String,
    required: true
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;