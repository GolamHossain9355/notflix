exports.up = function (knex) {
  return knex.schema.createTable("userBookmarks", (table) => {
    table.integer("user")
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("userBookmarks");
};
