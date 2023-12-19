import { Pool } from 'pg';

export const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: 'localhost',
    database: 'api',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
});

export const query = async (text, params, callback) => {
    const start = Date.now();
    const res = await pool.query(text, params, callback);
    const duration = Date.now() - start;
    console.log('executed query', { text, duration, rows: res.rowCount });
    return res;
};

export const getClient = () => {
    return pool.connect();
};
