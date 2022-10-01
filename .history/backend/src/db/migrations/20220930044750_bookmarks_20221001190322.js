exports.up = function (knex) {
  return knex.schema.createTable("bookmarks", (table) => {
    table.integer("user_id").unsigned().notNullable;
    table
      .foreign("user_id")
      .references("user_id")
      .inTable("profiles")
      .onDelete("cascade");

    table.integer("media_id").unsigned();
    table
      .foreign("media_id")
      .references("media_id")
      .inTable("media")
      .onDelete("cascade");

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("bookmarks");
};
