const Task = require("../models/tasksModel");
const auth = require("../middlewares/authMiddleware");

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({
    title,
    description,
    completed: false,
    userId: req.user,
  });
  await task.save();
  res.json(task);
};
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ msg: "Task deleted" });
};
