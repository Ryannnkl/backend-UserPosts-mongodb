const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  likes: Number,
  image_post: {
    type: String,
    required: true
  },
  description: String,
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Post", PostSchema);
