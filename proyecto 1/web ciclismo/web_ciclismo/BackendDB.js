const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./Backend2.sqlite');

module.exports = db;
