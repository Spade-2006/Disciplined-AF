require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Export query function correctly
const query = (text, params) => {
  return pool.query(text, params);
};

module.exports = {
  pool,
  query,
};
