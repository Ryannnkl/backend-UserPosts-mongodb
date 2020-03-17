const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  users_follow: {
    type: [mongoose.Types.ObjectId],
    ref: "user"
  },
  following: {
    type: Number,
    required: false
  },
  followers: {
    type: Number,
    required: false
  },
  posts_count: {
    type: Number,
    required: false
  },
  posts_id: {
    type: [mongoose.Types.ObjectId],
    ref: "Post"
  }
});

module.exports = mongoose.model("User", UserSchema);
