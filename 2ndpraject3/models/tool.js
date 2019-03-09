const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toolSchema = new Schema({
  category: {
      type: String,
      required: true
    },
  name: {
      type: String,
      required: true
    },
  subclass: {
      type: Number,
      required: true
    },
  four_hour: {
      type: Number,
      required: true
    },
  daily: {
      type: Number,
      required: true
    },
  weekly: {
      type: Number,
      required: true
    },
  deposit: {
      type: Number,
      required: true
    },
})

const Tool = mongoose.model("Tool", toolSchema);

module.exports = Tool;