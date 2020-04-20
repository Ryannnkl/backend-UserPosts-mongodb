const Post = require("../Models/Post");
const User = require("../Models/User");

module.exports = {
  async update(req, res) {
    const { post_id } = req.headers;

    const post = await Post.findById(post_id);

    // if (!post) return res.status(404).json({ error: "Post não encontrado" });

    Post.updateOne({ _id: post_id }, { $inc: { likes: 1 } })
      .then(response => {
        console.log("liked");
      })
      .catch(err => {
        console.log("error :", err);
      });

    await post.save();

    return res.json(post);
  }
};
