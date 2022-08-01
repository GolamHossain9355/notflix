const movieData = require("../fixtures/movieData");

exports.seed = function (knex) {
  return knex
    .raw("truncate table movies restart identity cascade")
    .then(() => movieData().then((data) => knex("movies").insert(data)));
};
