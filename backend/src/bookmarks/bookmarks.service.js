const knex = require("../db/connections");
const reduceProperties = require("../utils/reduce-properties");

function create(newData) {
  return knex("bookmarks")
    .insert(newData)
    .returning("*")
    .then((data) => data[0]);
}

const mediaReduce = reduceProperties("media", {
  media_id: ["media", null, "media_id"],
  type: ["media", null, "type"],
  image: ["media", null, "image"],
  title: ["media", null, "title"],
  runtime: ["media", null, "runtime"],
  year_released: ["media", null, "year_released"],
  genres: ["media", null, "genres"],
  content_rating: ["media", null, "content_rating"],
  metacritic_rating: ["media", null, "metacritic_rating"],
  imDb_rating: ["media", null, "imDb_rating"],
  summery: ["media", null, "summery"],
  cast: ["media", null, "cast"],
});

function read(user_id) {
  return knex("bookmarks as b")
    .join("profiles as p", "p.user_id", "b.user_id")
    .join("media as m", "m.media_id", "b.media_id")
    .select("m.*", "b.user_id")
    .where({ "b.user_id": user_id })
    .then(mediaReduce);
}

function destroy(user_id, media_id) {
  return knex("bookmarks").where({ user_id, media_id }).del();
}

module.exports = {
  read,
  create,
  delete: destroy,
};
