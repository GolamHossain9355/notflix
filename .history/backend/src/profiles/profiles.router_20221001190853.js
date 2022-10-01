const router = require("express").Router();
const controller = require("./pr");
const commentsRouter = require("../comments/comments.router");
const methodNotAllowed = require("../errors/methodNotAllowed");