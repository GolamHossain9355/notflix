const knex = require("../db/connections");

function listAllMovies(inputData) {
  if (inputData.genres) {
    return listMoviesByGenre(inputData);
  }

  if (inputData.orderBy === "imDb_rating") {
  }

  return knex("movies").orderBy(inputData.orderBy, inputData.ascOrDesc);
}

function listMoviesByGenre(inputData) {
  return knex("movies")
    .where("genres", "like", `%${inputData.genres}%`)
    .orderBy(inputData.orderBy, inputData.ascOrDescData);
}

function read(movie_id) {
  return knex("movies").where({ movie_id });
}

module.exports = {
  listAllMovies,
  read,
};
