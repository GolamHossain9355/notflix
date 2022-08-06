const service = require("../movies.service");
const validationVariables = require("./validationVariables");

async function validateGenres(req, _res, next) {
  const { genre } = req.query;
  const validGenres = validationVariables.validGenres;

  if ((genre && validGenres.has(genre)) || !genre) return next();

  return next({
    status: 400,
    message: `Movie genre: ${genre} is not a valid genre`,
  });
}

async function validateOrderAndAscDesc(req, _res, next) {
  const { orderBy, ascOrDesc } = req.query;
  const validOrderBys = validationVariables.validOrderBys;
  const validAscOrDesc = validationVariables.validAscOrDesc;

  if (orderBy && !validOrderBys.has(orderBy)) {
    return next({
      status: 400,
      message: `Input query orderBy: ${orderBy} is not valid`,
    });
  }
  if (ascOrDesc && !validAscOrDesc.has(ascOrDesc)) {
    return next({
      status: 400,
      message: `Input query ascOrDesc: ${ascOrDesc} is not valid`,
    });
  }
  return next();
}

async function validateMovieExists(req, res, next) {
  const { movieId } = req.params;
  const foundMovie = await service.read(movieId);

  if (foundMovie.length === 0) {
    return next({
      status: 404,
      message: `movie with the id: ${movieId} not found`,
    });
  }

  res.locals.foundMovie = foundMovie;
  return next();
}

async function validateReqBody(req, res, next) {
  const { data: newData } = req.body;
  const validUpdateData = validationVariables.validRequestBodyData;

  for (const key of Object.keys(newData)) {
    if (!validUpdateData.has(key)) {
      return next({
        status: 404,
        message: `Cannot update the value for ${key}`,
      });
    }
  }

  res.locals.newData = newData;
  return next();
}

module.exports = {
  validateGenres,
  validateOrderAndAscDesc,
  validateMovieExists,
  validateReqBody,
};
