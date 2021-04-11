const User = require('../models/User');

module.exports = {
  async index(req,res) {

  },
  async store(req, res) {
      const { name, email } = req.body;

      const user = await User.create({ name, email });

      return res.json({ data: user });
    }
}
