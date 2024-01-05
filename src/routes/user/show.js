import express from 'express';
import { pool } from '../../db/index';

const router = express.Router();

router.get('/api/user/:name', async (req, res) => {
    const userName = req.params.name.toUpperCase();

    pool.query(`SELECT * FROM USERS WHERE UPPER(name) = '${userName}'`, (error, results) => {
        if (error) {
            res.status(500).send({ error: error });
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

export { router as showUserRouter };
