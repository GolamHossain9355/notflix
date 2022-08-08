const service = require("./comments.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const validateMediaExists = require("../media/validations/validations");
const validations = require("./validations/validations");

async function listComments(req, res) {
  const { mediaId } = req.params;
  const data = await service.listComments(mediaId);
  res.status(200).json({ data });
}

async function create(req, res) {
  const { mediaId } = req.params;
  const newData = res.locals.newData;

  const data = await service.create(mediaId, newData);
  res.status(200).json({ data });
}

async function update(req, res) {
  const { commentId } = req.params;
  const newData = res.locals.newData;

  const data = await service.update(commentId, newData);
  res.status(200).json({ data });
}

async function destroy(req, res) {
  const { commentId } = req.params;
  await service.delete(commentId);
  res.sendStatus(204);
}

module.exports = {
  listComments: asyncErrorBoundary(listComments),
  create: [
    asyncErrorBoundary(validateMediaExists),
    asyncErrorBoundary(validations.validateCreateReqBody),
    asyncErrorBoundary(create),
  ],
  update: [
    asyncErrorBoundary(validateMediaExists),
    asyncErrorBoundary(validations.validateCreateReqBody),
    asyncErrorBoundary(update)
  ],
  delete: [
    asyncErrorBoundary(validateMediaExists),
    asyncErrorBoundary(destroy)
  ],
};
