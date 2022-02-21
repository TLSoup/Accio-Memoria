const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    lowercase: false
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    unique: false,
    lowercase: false
  },
  avatar: {
      type: Buffer,
      required: false,
      unique: false,
  }
});

module.exports = mongoose.model("User", userSchema)
