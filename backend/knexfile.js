require("dotenv").config();
 
const { DEVELOPMENT_URL } = process.env;
const path = require("path");
 
module.exports = {
  development: {
    client: "pg",
    connection: DEVELOPMENT_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};

