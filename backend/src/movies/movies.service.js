const knex = require("../db/connections");

function listAllMovies(inputData) {
  if (inputData.genres) {
    return listMoviesByGenre(inputData);
  }
  return knex("movies").orderBy(inputData.orderBy, inputData.ascOrDesc);
}

function listMoviesByGenre(inputData) {
  return knex("movies")
    .where("genres", "like", `%${inputData.genres}%`)
    .orderBy(inputData.orderBy, inputData.ascOrDescData);
}

module.exports = {
  listAllMovies,
};
