const router = require("express").Router();
const controller = require("./movies.controller");
const movieCommentsRouter = require("../movieComments/movieComments.router");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.listAllMedia)
  .post(controller.create)
  .all(methodNotAllowed);

router
  .route("/:mediaId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router.use("/:mediaId/comments", movieCommentsRouter);

module.exports = router;
