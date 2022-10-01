exports.up = function (knex) {
  return knex.schema.createTable("userBookmarks", (table) => {
    table.integer("user_id").unsigned()
    table
      .foreign("user_id")
      .references("user_id")
      .inTable("userProfiles")
      .onDelete("cascade")

    table.in

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("userBookmarks");
};
