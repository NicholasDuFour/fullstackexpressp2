"use strict";
const pg = require("pg");
//This is our object that connects us to our database
const pool = new pg.Pool ({
  user: "postgres",
  password: "DuFour!",
  host: "localhost",
  port: 5432,
  database: "ExpressShopDB",
  ssl: false
});

module.exports = pool;
