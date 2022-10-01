const router = require("express").Router();
const controller = require("./media.controller");
const commentsRouter = require("../comments/comments.router");
const methodNotAllowed = require("../errors/methodNotAllowed");