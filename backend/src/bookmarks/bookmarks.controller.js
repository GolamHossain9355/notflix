const service = require("./bookmarks.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res) {
  const { userId } = req.params;
  const { data: newData } = req.body;
  const createData = {
    ...newData,
    user_id: userId,
  };
  const data = await service.create(createData);
  res.status(200).json({ data });
}

async function read(req, res) {
  const { userId } = req.params;
  const data = await service.read(userId);
  res.status(200).json({ data });
}

async function destroy(req, res) {
  const { userId, mediaId } = req.params;
  await service.delete(userId, mediaId);
  res.sendStatus(204)
}

module.exports = {
  read: [asyncErrorBoundary(read)],
  create: [asyncErrorBoundary(create)],
  delete: [asyncErrorBoundary(destroy)]
};
