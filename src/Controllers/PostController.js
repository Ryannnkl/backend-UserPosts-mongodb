const Post = require("../Models/Post");
const User = require("../Models/User");

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { description } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(404).json({ error: "usuario não encontrado" });
    }

    const post = await Post.create({
      user_id,
      description,
      image_post: filename
    });

    user.updateOne({ _id: user_id }, { $push: { posts_id: post._id } });

    await user.save();

    console.log(user, post);

    return res.json(post);
  },

  async index(req, res) {
    return res.json({ ok: "true" });
  }
};
