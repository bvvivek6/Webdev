const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

module.exports = mongoose.model("tasks", taskSchema);
