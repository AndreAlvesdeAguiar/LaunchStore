  const { Pool } = require("pg")

  module.exports = new Pool({
      user: 'postgres',
      password: "",
      host: "localhost",
      post: 5432,
      database: "launchstoredb"
  })