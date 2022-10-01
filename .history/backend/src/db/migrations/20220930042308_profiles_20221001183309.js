exports.up = function (knex) {
  return knex.schema.createTable("profiles", (table) => {
    table.increments("user_id").primary();
    table.unique("email");
    table.string("password");
    table.text("image");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("profiles");
};
