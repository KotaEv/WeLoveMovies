const path = require("path");

require("dotenv").config();

const {
  DATABASE_URL = "postgres://bfqzzvcm:5MLtcI-BCHTJhcP7dJyJwPat_7OEUNHi@suleiman.db.elephantsql.com/bfqzzvcm"
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: __dirname + "/src/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/db/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: __dirname + "/src/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/db/seeds",
    },
  },
  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: __dirname + "/src/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/db/seeds",
    },
    useNullAsDefault: true,
  },
};
