const { query } = require("./connection");

async function syncDatabase() {
    await query(`
    CREATE TABLE IF NOT EXISTS test_sync (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
    );
  `);

    console.log('Database synchronized');
}

syncDatabase();