const service = require("./profiles.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const data = await service.list();
  res.status(200).json({ data });
}

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
  const { userId } = req.params;
  await service.delete(userId);
  res.sendStatus(204);
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: asyncErrorBoundary(create),
  read: asyncErrorBoundary(read),
  delete: asyncErrorBoundary(destroy),
};
