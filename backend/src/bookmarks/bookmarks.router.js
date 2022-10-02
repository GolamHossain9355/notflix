const router = require("express").Router({ mergeParams: true });
const controller = require("./bookmarks.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").post(controller.create).all(methodNotAllowed);

router.route("/:userId").get(controller.read).all(methodNotAllowed);

router.route("/:mediaId").delete(controller.delete).all(methodNotAllowed);

module.exports = router;
