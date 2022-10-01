exports.up = function (knex) {
  return knex.schema.createTable("userProfiles", (table) => {
    table.increments("user_id").primary();
    table.unique("email")
    table.string("password")
    table.text("image");

    table.integer("media_id").unsigned()
    table
      .foreign("media_id")
      .references("media_id")
      .in

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("userProfiles");
};
