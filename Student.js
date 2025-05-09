const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  department: String,
  marks: Number,
  attendance: Number,
});

module.exports = mongoose.model("Student", StudentSchema);
