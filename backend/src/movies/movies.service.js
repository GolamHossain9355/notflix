const knex = require("../db/connections");

function listAllMedia(inputData) {
  if (inputData.genre) {
    return listMediaByGenre(inputData);
  }
  return knex("media")
    .orderBy(inputData.orderBy, inputData.ascOrDesc)
    .limit(inputData.limit);
}

function listMediaByGenre(inputData) {
  return knex("media")
    .where("genres", "like", `%${inputData.genre}%`)
    .orderBy(inputData.orderBy, inputData.ascOrDesc)
    .limit(inputData.limit);
}

function create(newData) {
  return knex("media")
    .insert(newData)
    .returning("*")
    .then((data) => data[0]);
}

function read(media_id) {
  return knex("media").where({ media_id });
}

function update(media_id, newData) {
  return knex("media")
    .where({ media_id })
    .update(newData)
    .returning("*")
    .then((data) => data[0]);
}

function destroy(media_id) {
  return knex("media").where({ media_id }).del()
}

module.exports = {
  listAllMedia,
  read,
  update,
  create,
  delete: destroy,
};
