exports.up = function (knex) {
  return knex.schema.table("movies", (table) => {
    table.dropColumn("movie_id");
  });
};

exports.down = function (knex) {
  return knex.schema.table("movies", (table) => {
    table.string("movie_id");
  });
};
