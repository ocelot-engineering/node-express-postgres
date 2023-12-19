import express from 'express';
import { pool } from '../db/index';

const router = express.Router();

router.get('/api/user', async (req, res) => {
    await pool.query('SELECT * FROM USERS ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

export { router as userRouter };
