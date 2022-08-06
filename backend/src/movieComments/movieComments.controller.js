const service = require("./movieComments.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const { request } = require("express");

async function listMovieComments(req, res) {
  const { movieId } = req.params;
  const data = await service.listMovieComments(movieId);
  res.status(200).json({ data });
}

async function create(req, res) {
  const { movieId } = req.params;
  const { data: newData } = req.body;

  const data = await service.create(movieId, newData);
  res.status(200).json({ data });
}

async function destroy(req, res) {
  const { commentId } = req.params;
  await service.delete(commentId);
  res.sendStatus(204);
}

module.exports = {
  listMovieComments: asyncErrorBoundary(listMovieComments),
  create: asyncErrorBoundary(create),
  delete: asyncErrorBoundary(destroy),
};
