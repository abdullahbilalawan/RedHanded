const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Exam: {
    type: Buffer,
    required: false,
  },
});
module.exports = mongoose.model("Admin", adminSchema);
