const service = require("./bookmarks.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res) {
  const { data: newData } = req.body;
  const data = await service.create(newData);
  res.status(200).json({ data });
}

async function read(req, res) {
  const { userId } = req.params;
  const data = await service.read(userId);
  res.status(200).json({ data });
}

async function destroy(req, res) {
  const { userId, mediaId } = req.body;
  await service.delete(userId, mediaId);
  res.sendStatus(204);
}

module.exports = {
  create: [asyncErrorBoundary(create)],
  read: [asyncErrorBoundary(read)],
  delete: [asyncErrorBoundary(destroy)],
};
