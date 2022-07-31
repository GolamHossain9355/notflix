exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("id").primary()
    table.string("movie_id")
    table.string("rank")
    table.string("title");
    table.string("full_title");
    table.string("year");
    table.string("image");
    table.string("imDb_rating");
    table.timestamps(true, true)
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("movies");
};
