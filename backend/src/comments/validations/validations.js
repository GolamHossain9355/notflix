const service = require("../comments.service");
const variables = require("./variables");

async function validateCreateReqBody(req, res, next) {
  const { data: newData } = req.body;
  const validCreateReqData = variables.validCreateReqData;

  for (const key of Object.keys(newData)) {
    if (!validCreateReqData.has(key)) {
      return next({
        status: 404,
        message: `Cannot create or update the value for ${key}`,
      });
    }
  }

  res.locals.newData = newData;
  return next();
}

async function validateUpdateReqBody(req, res, next) {
  const { data: newData } = req.body;

  if (newData["media_id"] !== undefined) {
    return next({
      status: 404,
      message: `Cannot update media_id for comment`,
    });
  }

  res.locals.newData = newData;
  return next();
}

async function validateCommentExists(req, res, next) {
  const { commentId } = req.params;
}

module.exports = {
  validateCreateReqBody,
  validateCommentExists,
};
