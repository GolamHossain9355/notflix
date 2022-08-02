const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

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

module.exports = {
  listAllMovies: asyncErrorBoundary(listAllMovies),
};
