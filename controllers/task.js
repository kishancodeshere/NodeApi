const Task = require("../models/task");

const getAllTask = (req, res) => {
  res.send("all items fron the controller");
};
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("UpdateTask TAsk");
};
const deleteTask = (req, res) => {
  res.send("DeleteTask TAsk");
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
