const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  RollNo: {
    type: String,
    required: true,
  },
 
});
module.exports = mongoose.model("User", userSchema);