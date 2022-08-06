exports.up = function (knex) {
  return knex.schema.renameTable("comments", "movie_comments");
};

exports.down = function (knex) {
  return knex.schema.renameTable("movie_comments", "comments");
};
