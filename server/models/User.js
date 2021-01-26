const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  fullName: String,
  createdAt: String,
  selectedFile: String,
});

module.exports = model("User", userSchema);
