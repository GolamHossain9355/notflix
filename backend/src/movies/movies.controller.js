const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function listAllMovies(req, res) {
  const { orderBy } = req.query;
  const { ascOrDesc } = req.query;

  const data = await service.listAllMovies(orderBy, ascOrDesc);
  res.status(200).json({ data });
}

async function listMoviesByGenre(req, res) {
  const { orderBy } = req.query;
  const { ascOrDesc } = req.query;
  const { genres } = req.query;

  const data = await service.listMoviesByGenre(genres, orderBy, ascOrDesc);
  res.status(200).json({ data });
}

module.exports = {
  listAllMovies: asyncErrorBoundary(listAllMovies),
  listMoviesByGenre: asyncErrorBoundary(listMoviesByGenre),
};
