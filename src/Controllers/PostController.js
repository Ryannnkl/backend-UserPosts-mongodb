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

    User.update({ _id: user_id }, { $push: { posts_id: post._id } })
      .then(x => {
        console.log("post com sucesso");
      })
      .catch(err => {
        console.log(err);
      });

    await user.save();

    console.log(user, post);

    return res.json({ post: post, user: user });
  },

  async index(req, res) {
    const { user_id } = req.headers;

    const posts = await Post.find({ user_id });
    const user = await User.findById(user_id);

    if (!user) res.status(404).json({ error: "como assim ta sem usuario?" });

    if (!posts) res.json({ notPosts: "usuario não tem nem um post ainda" });

    return res.json(posts);
  }
};
