require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

async function query(queryString, params) {
    try {
        const result = await pool.query(queryString, params);
        console.log(`Query success: ${result.command}`);
        return result;
    } catch (error) {
        throw error;
    }

}

async function getClient() {
    return await pool.connect();
}

module.exports = { query, getClient };
