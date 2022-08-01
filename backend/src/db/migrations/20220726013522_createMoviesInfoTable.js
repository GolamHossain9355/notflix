exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.string("movie_id");
    table.string("image");
    table.string("title");
    table.string("year_released");
    table.string("runtime");
    table.string("genres");
    table.string("content_rating");
    table.string("imDb_rating");
    table.string("metacritic_rating");
    table.string("summery");
    table.string("cast");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("movies");
};
