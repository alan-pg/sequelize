const express = require("express");

const UserController = require("./controllers/UserController");
const AdressesControler = require("./controllers/AdressesController");
const TechController = require("./controllers/TechController");
const ReportController = require("./controllers/ReportController");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/users/:user_id/adresses", AdressesControler.index);
routes.post("/users/:user_id/adresses", AdressesControler.store);

routes.get("/users/:user_id/techs", TechController.index);
routes.post("/users/:user_id/techs", TechController.store);
routes.delete("/users/:user_id/techs", TechController.delete);

routes.get("/report", ReportController.show);

routes.get('/teste', (req, res) => res.json({teste: 'testeeee'}))

module.exports = routes;
