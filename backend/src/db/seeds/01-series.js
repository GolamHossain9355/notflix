const seriesData = require("../fixtures/seriesData");

exports.seed = function (knex) {
  return knex
    .raw("truncate table series restart identity cascade")
    .then(() => seriesData().then((data) => knex("series").insert(data)));
};
