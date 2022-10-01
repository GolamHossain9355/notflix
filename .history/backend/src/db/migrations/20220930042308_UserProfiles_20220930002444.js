exports.up = function (knex) {
  return knex.schema.createTable("userProfiles", (table) => {
    table.increments("user_id").primary();
    table.p
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("userProfiles");
};
