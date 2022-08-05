exports.up = function (knex) {
  return knex.schema.createTable("comments", (table) => {
    table.increments("comment_id").primary();

    table.integer("movie_id").unsigned();
    table
      .foreign("movie_id")
      .references("movie_id")
      .inTable("movies")
      .onDelete("cascade");

    table.text("description");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("comments");
};
