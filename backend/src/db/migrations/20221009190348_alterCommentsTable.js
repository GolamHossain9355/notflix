exports.up = function(knex) {
  return knex.schema.table("comments", (table) => {
    table.string("user_id").unsigned().notNullable();
    table.string("user_image").notNullable();
    table.integer("rating").unsigned()
    table.renameColumn("commenter_name", "display_name")
    table.renameColumn("comment_description", "body")
  })  
};

exports.down = function(knex) {
  
};
