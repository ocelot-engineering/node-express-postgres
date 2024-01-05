import 'dotenv/config';
import fs from 'fs';
import { Pool } from 'pg';

/**
 * Database connection pool.
 * @type {Pool}
 */
export const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
});

/**
 * Executes a SQL query using the provided text and parameters.
 * @param {string} text - The SQL query text.
 * @param {Array} params - The parameters to be used in the query.
 * @param {Function} callback - The callback function to be executed after the query is completed.
 * @returns {Promise} - A promise that resolves to the query result.
 */
export const query = async (text, params, callback) => {
    const start = Date.now();
    const res = await pool.query(text, params, callback);
    const duration = Date.now() - start;
    console.log('executed query', { text, duration, rows: res.rowCount });
    return res;
};

/**
 * Executes an SQL file.
 * @param {string} filePath - The path to the SQL file.
 * @returns {Promise<any>} - A promise that resolves with the result of the SQL query.
 */
export async function executeSQLFile(filePath) {
    const sql = fs.readFileSync(filePath, 'utf8');
    return await query(sql);
}
