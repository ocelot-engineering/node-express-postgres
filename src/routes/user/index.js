import express from 'express';
import { pool } from '../../db/index';

const router = express.Router();

router.get('/api/user', async (req, res) => {
    pool.query('SELECT * FROM USERS ORDER BY id ASC', (error, results) => {
        if (error) {
            res.status(500).send({ error: error });
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

export { router as indexUserRouter };
