const knex = require("../db/connections");

function listMovieComments(movie_id) {
  return knex("movie_comments").where({ movie_id });
}

function create(movie_id, newData) {
  return knex("movie_comments")
    .where({ movie_id })
    .insert(newData)
    .returning("*")
    .then((data) => data[0]);
}

function destroy(comment_id) {
  return knex("movie_comments").where({ comment_id }).del();
}

module.exports = {
  listMovieComments,
  create,
  delete: destroy,
};
