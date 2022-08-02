exports.up = function (knex) {
  return knex.schema.createTable("series", (table) => {
    table.increments("id").primary();
    table.string("series_id");
    table.text("image");
    table.string("title");
    table.string("year_released");
    table.string("genres");
    table.string("content_rating");
    table.decimal("imDb_rating");
    table.text("summery");
    table.text("cast");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("series");
};
