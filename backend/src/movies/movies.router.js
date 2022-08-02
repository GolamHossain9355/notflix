const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.listAllMovies).all(methodNotAllowed);

router.route("/genres").get(controller.listMoviesByGenre).all(methodNotAllowed);

module.exports = router;
