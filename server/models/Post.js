const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  title: String,
  content: String,
  selectedFile: String,
  tags: [String],
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
