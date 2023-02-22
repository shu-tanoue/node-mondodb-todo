const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("タスクをすべて取得しました");
};

//タスクを新規作成しました
const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingeTask = (req, res) => {
  res.send("ある特定のタスクを所得しました");
};
const updateTask = (req, res) => {
  res.send("ある特定のタスクを更新しました");
};

const deleteTask = (req, res) => {
  res.send("ある特定のタスクを削除しました");
};
module.exports = {
  getAllTasks,
  createTask,
  getSingeTask,
  updateTask,
  deleteTask,
};
