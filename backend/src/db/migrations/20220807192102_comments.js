exports.up = function (knex) {
  return knex.schema.createTable("movie_comments", (table) => {
    table.increments("comment_id").primary();

    table.integer("media_id").unsigned();
    table
      .foreign("media_id")
      .references("media_id")
      .inTable("media")
      .onDelete("cascade");

    table.string("commenter_name").unique();
    table.text("comment_description");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("movie_comments");
};
