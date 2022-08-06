const router = require("express").Router({ mergeParams: true });
const controller = require("./movieComments.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.listMovieComments)
  .post(controller.create)
  .all(methodNotAllowed);

router.route("/:commentId").delete(controller.delete).all(methodNotAllowed);

module.exports = router;
