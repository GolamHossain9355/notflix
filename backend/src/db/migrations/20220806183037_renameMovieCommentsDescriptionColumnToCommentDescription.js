exports.up = function (knex) {
  return knex.schema.table("movie_comments", (table) => {
    table.renameColumn("description", "comment_description");
  });
};

exports.down = function (knex) {
  return knex.schema.table("movie_comments", (table) => {
    table.renameColumn("comment_description", "description");
  });
};
