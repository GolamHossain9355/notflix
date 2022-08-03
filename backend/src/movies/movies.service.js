const knex = require("../db/connections");

function listAllMovies(inputData) {
  if (inputData.genre) {
    return listMoviesByGenre(inputData);
  }
  return knex("movies")
    .orderBy(inputData.orderBy, inputData.ascOrDesc)
    .limit(inputData.limit);
}

function listMoviesByGenre(inputData) {
  return knex("movies")
    .where("genres", "like", `%${inputData.genre}%`)
    .orderBy(inputData.orderBy, inputData.ascOrDesc)
    .limit(inputData.limit);
}

function read(movie_id) {
  return knex("movies").where({ movie_id });
}

module.exports = {
  listAllMovies,
  read,
};
