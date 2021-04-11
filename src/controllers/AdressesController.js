const Adress = require("../models/Address");
const User = require("../models/User");
const { index } = require("./UserController");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    // const user = await User.findByPk(user_id);
    const user = await User.findByPk(user_id, {
      include: { association: 'addresses' }
    });

    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }

    return res.json({ data: user });
  },
  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }
    console.log("req body", {
      zipcode,
      street,
      number,
      user_id,
    });

    const adress = await Adress.create({
      zipcode,
      street,
      number,
      user_id,
    });

    return res.json({ data: adress });
  },
};
