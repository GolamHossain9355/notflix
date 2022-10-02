const knex = require("../db/connections");

function list() {
  return knex("profiles");
}

function create(newData) {
  newData["image"] = "put a default";
  return knex("profiles")
    .insert(newData)
    .returning("*")
    .then((data) => data[0]);
}

function read(user_id) {
  return knex ("profiles").where({ user_id }).first()
}

function destroy(user_id) {
  return knex("profiles").where({ user_id }).del()
}

module.exports = {
  list,
  create,
  read,
  delete: destroy,
};
