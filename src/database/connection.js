require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

async function query(queryString, params) {
    try {
        const result = await pool.query(queryString, params);
        console.log(result.rows);
        return result;
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }

}

async function getClient() {
    return await pool.connect();
}

module.exports = { query, getClient };
