exports.up = function (knex) {
  return knex.schema.table("movies", (table) => {
    table.renameColumn("id", "movie_id");
  });
};

exports.down = function (knex) {
  return knex.schema.table("movies", (table) => {
    table.renameColumn("movie_id", "id");
  });
};
