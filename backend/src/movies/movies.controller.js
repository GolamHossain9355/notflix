const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const validations = require("./validations/validations.js");

async function listAllMovies(req, res) {
  const { orderBy } = req.query;
  const { ascOrDesc } = req.query;
  const { genres } = req.query;

  const allInputData = {
    genres,
    orderBy: orderBy || "title",
    ascOrDesc: ascOrDesc || "asc",
  };

  const data = await service.listAllMovies(allInputData);
  res.status(200).json({ data });
}

async function read(req, res) {
  const { movieId } = req.params;

  const data = await service.read(movieId);
  res.status(200).json({ data });
}

module.exports = {
  listAllMovies: [
    asyncErrorBoundary(validations.validateGenres),
    asyncErrorBoundary(validations.validateOrderAndAscDesc),
    asyncErrorBoundary(listAllMovies),
  ],
  read: asyncErrorBoundary(read),
};
