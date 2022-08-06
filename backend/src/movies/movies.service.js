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

function create(newData) {
  return knex("movies")
    .insert(newData)
    .returning("*")
    .then((data) => data[0]);
}

function read(movie_id) {
  return knex("movies").where({ movie_id });
}

function update(movie_id, newData) {
  return knex("movies")
    .where({ movie_id })
    .update(newData)
    .returning("*")
    .then((data) => data[0]);
}

function destroy(movie_id) {
  return knex("movies").where({ movie_id }).del()
}

module.exports = {
  listAllMovies,
  read,
  update,
  create,
  delete: destroy,
};
