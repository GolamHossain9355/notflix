const service = require("./comments.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function listComments(req, res) {
  const { mediaId } = req.params;
  const data = await service.listComments(mediaId);
  res.status(200).json({ data });
}

async function create(req, res) {
  const { mediaId } = req.params;
  const { data: newData } = req.body;

  const data = await service.create(mediaId, newData);
  res.status(200).json({ data });
}

async function destroy(req, res) {
  const { commentId } = req.params;
  await service.delete(commentId);
  res.sendStatus(204);
}

module.exports = {
  listComments: asyncErrorBoundary(listComments),
  create: asyncErrorBoundary(create),
  delete: asyncErrorBoundary(destroy),
};
