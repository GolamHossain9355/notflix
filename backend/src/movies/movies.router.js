const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.listAllMovies).all(methodNotAllowed);

module.exports = router;
