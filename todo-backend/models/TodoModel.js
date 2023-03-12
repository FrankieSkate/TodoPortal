const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  time: { type: Date, default: Date.now },
  status: Boolean,
});

module.exports = mongoose.model("ToDo", todoSchema);
