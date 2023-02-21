const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [ture, "タスク名を入れる"],
    trum: ture,
    maxlength: [20, "タスク名は、20文字以内で入力"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
