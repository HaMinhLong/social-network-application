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

const user = model("User", userSchema);

module.exports = user;
