const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: false
  },
  taskType: {
    type: String,
    default: "Work",
  },
  dueDate: {
      type: Date,
      required: false,
  },
  status: {
    type: String,
    default: "Not Started",
  },
  priority: {
      type: Boolean,
      default: false,
  },
  createdAt: {
    type: String,
    default: new Date().toISOString,
  },
});

module.exports = mongoose.model("Task", taskSchema)