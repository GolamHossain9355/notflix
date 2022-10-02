const router = require("express").Router();
const controller = require("./profiles.controller");
const bookmarksRouter = require("../bookmarks/bookmarks.router");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router
  .route("/:userId")
  .get(controller.read)
  .delete(controller.delete)
  .all(methodNotAllowed);

router.use("/:userId/bookmarks", bookmarksRouter);

module.exports = router;
