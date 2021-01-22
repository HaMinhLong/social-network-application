const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  fullName: String,
  createdAt: String,
  selectedFile: {
    type: String,
    default:
      "https://www.umass.edu/philosophy/sites/default/files/store/img/cfm/user_14.png",
  },
});

module.exports = model("User", userSchema);
