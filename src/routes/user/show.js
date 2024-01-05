import express from 'express';
import { pool } from '../../db/index';

const router = express.Router();

router.get('/api/user/:name', async (req, res) => {
    const userName = req.params.name.toUpperCase();

    try {
        const result = await pool.query(`SELECT * FROM USERS WHERE UPPER(name) = '${userName}'`);
        res.status(200).json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err, userName: userName });
    }
});

export { router as showUserRouter };
