const service = require("./media.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const validations = require("./validations/validations");

async function listAllMedia(req, res) {
  const {
    type = "",
    genre = "",
    orderBy = "title",
    ascOrDesc = "asc",
    limit = "25",
  } = req.query;

  const allInputData = { type, genre, limit, orderBy, ascOrDesc };

  const data = await service.listAllMedia(allInputData);
  res.status(200).json({ data });
}

async function listRandomMedia(req, res) {
  const { limit } = req.query;

  const data = await service.listRandomMedia(limit)
  res.status(
}

async function create(req, res) {
  const newData = res.locals.newData;

  const data = await service.create(newData);
  res.status(200).json({ data });
}

async function read(_req, res) {
  const data = res.locals.foundMedia;
  res.status(200).json({ data });
}

async function update(req, res) {
  const { mediaId } = req.params;
  const newData = res.locals.newData;

  const data = await service.update(mediaId, newData);
  res.status(200).json({ data });
}

async function destroy(req, res) {
  const { mediaId } = req.params;
  await service.delete(mediaId);
  res.sendStatus(204);
}

module.exports = {
  listAllMedia: [
    validations.validateGenres,
    validations.validateTypes,
    validations.validateOrderAndAscDesc,
    asyncErrorBoundary(listAllMedia),
  ],
  create: [validations.validateReqBody, asyncErrorBoundary(create)],
  read: [
    asyncErrorBoundary(validations.validateMediaExists),
    asyncErrorBoundary(read),
  ],
  update: [
    asyncErrorBoundary(validations.validateMediaExists),
    validations.validateReqBody,
    asyncErrorBoundary(update),
  ],
  delete: [
    asyncErrorBoundary(validations.validateMediaExists),
    asyncErrorBoundary(destroy),
  ],
};
