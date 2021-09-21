const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
  Topic: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },
  File: {
    type: Buffer,
    required: true,
  },
 
});
module.exports = mongoose.model("Test", testSchema);