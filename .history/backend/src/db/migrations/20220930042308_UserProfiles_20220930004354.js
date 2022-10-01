exports.up = function (knex) {
  return knex.schema.createTable("userProfiles", (table) => {
    table.increments("user_id").primary();
    table.string("email")
    table.string("password")
    table.text("image");
    table.unique("email")
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("userProfiles");
};
