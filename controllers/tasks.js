const Task = require("../models/Task");

//タスクをすべて取得するところ
const getAllTasks = async (req, res) => {
  try {
    const allTask = await Task.find({});
    res.status(200).json(allTask);
  } catch (err) {
    res.status(500).json(err);
  }
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
//特定のタスクを所得するところ.一つだけをピックする
const getSingeTask = async (req, res) => {
  try {
    const getSingleTask = await Task.findOne({ _id: req.params.id });
    res.status(200).json(getSingleTask);

    if (!getSingeTask) {
      return res.status(404).json(`_id:${req.params.id}は存在しない`);
    }
  } catch (err) {
    res.status(500).json(err);
  }
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
