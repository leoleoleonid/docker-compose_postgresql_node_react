const {Pool} = require('pg');

const db = new Pool({
  max: 10,
  connectionString: process.env.DATABASE_URL || 'postgres://user:pass@127.0.0.1:35432/db'
});

module.exports = db;
