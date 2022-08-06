const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const validations = require("./validations/validations");

async function listAllMovies(req, res) {
  const {
    orderBy = "title",
    ascOrDesc = "asc",
    genre,
    limit = "25",
  } = req.query;

  const allInputData = { genre, limit, orderBy, ascOrDesc };

  const data = await service.listAllMovies(allInputData);
  res.status(200).json({ data });
}

async function create(req, res) {
  const newData = res.locals.newData;

  const data = await service.create(newData);
  res.status(200).json({ data });
}

async function read(_req, res) {
  const data = res.locals.foundMovie;
  res.status(200).json({ data });
}

async function update(req, res) {
  const { movieId } = req.params;
  const newData = res.locals.newData;

  const data = await service.update(movieId, newData);
  res.status(200).json({ data });
}

async function destroy(req, res) {
  const { movieId } = req.params;
  await service.delete(movieId);
  res.sendStatus(204);
}

module.exports = {
  listAllMovies: [
    asyncErrorBoundary(validations.validateGenres),
    asyncErrorBoundary(validations.validateOrderAndAscDesc),
    asyncErrorBoundary(listAllMovies),
  ],
  create: [
    asyncErrorBoundary(validations.validateReqBody),
    asyncErrorBoundary(create),
  ],
  read: [
    asyncErrorBoundary(validations.validateMovieExists),
    asyncErrorBoundary(read),
  ],
  update: [
    asyncErrorBoundary(validations.validateMovieExists),
    asyncErrorBoundary(validations.validateReqBody),
    asyncErrorBoundary(update),
  ],
  delete: [
    asyncErrorBoundary(validations.validateMovieExists),
    asyncErrorBoundary(destroy),
  ],
};
