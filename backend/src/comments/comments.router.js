const router = require("express").Router({ mergeParams: true });
const controller = require("./comments.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.listComments)
  .post(controller.create)
  .all(methodNotAllowed);

router.route("/:commentId").delete(controller.delete).all(methodNotAllowed);

module.exports = router;
