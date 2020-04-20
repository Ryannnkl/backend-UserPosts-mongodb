const User = require("../Models/User");

module.exports = {
  async store(req, res) {
    const { email, password, name } = req.body;

    console.log(email, password);

    let user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      user = await User.create({
        email,
        password,
        name
      });
    }
    return res.json(user);
  },

  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async show(req, res) {
    const { email, password } = req.query;

    let user = await User.find({ email, password });

    if (!user) return res.status(404).json({ error: "usuario não encontrado" });

    return res.json(user);
  }
};
