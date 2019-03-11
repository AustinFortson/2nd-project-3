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
      type: String,
      required: true
    },
    nameCity: {
      type: String,
      required: true
    },
  nameState: {
      type: String,
      required: true
    },
  nameZipcode: {
      type: Number,
      required: true
    }, 
  nameEmail: {
    type: String,
    required: true
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;