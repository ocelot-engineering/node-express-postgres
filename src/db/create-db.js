import 'dotenv/config';
import { Client } from 'pg';

/**
 * Creates a new database using the provided environment variables.
 * @returns {Promise<void>} A promise that resolves when the database is created successfully, or rejects with an error.
 */
export async function createDatabase() {
    const client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
    });

    try {
        await client.connect();
        if (process.env.POSTGRES_REFRESH_DB_ON_LAUNCH === 'true') {
            await client.query(`DROP DATABASE IF EXISTS ${process.env.POSTGRES_DB}`);
            console.log(`${process.env.POSTGRES_DB} database was dropped.`);
        }
        await client.query(`CREATE DATABASE ${process.env.POSTGRES_DB}`);
        console.log(`${process.env.POSTGRES_DB} database created successfully`);
    } catch (err) {
        console.error('Error creating database', err);
    } finally {
        await client.end();
    }
}
