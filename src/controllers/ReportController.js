const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    //Encontrar todos os usuários que tem email que termina com @gmail.com
    //Desses usuários  eu quero buscar todos os que moram na rua "Rua abc"
    //Desses usuários eu quero buscar as tecnoligas que começam com react

    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.like]: "%gmail.com",
        },
      },
      include: [
        { association: "addresses", where: { street: "Rua abc" } },
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.like]: "React%",
            },
          },
        },
      ],
    });

    return res.json(users);
  },
};
