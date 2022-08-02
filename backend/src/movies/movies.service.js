const knex = require("../db/connections");

function listAllMovies(orderByData = "title", ascOrDescData = "asc") {
  return knex("movies").orderBy(orderByData, ascOrDescData);
}

function listMoviesByGenre(
  genres,
  orderByData = "title",
  ascOrDescData = "asc"
) {
  if (genres === undefined) return listAllMovies(orderByData, ascOrDescData);
  return knex("movies")
    .where("genres", "like", `%${genres}%`)
    .orderBy(orderByData, ascOrDescData);
}

module.exports = {
  listAllMovies,
  listMoviesByGenre,
};
