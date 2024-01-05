import express from 'express';
import { query } from '../../db/index';

const router = express.Router();

router.get('/api/user', async (req, res) => {
    try {
        const result = await query('SELECT * FROM USERS ORDER BY id ASC');
        res.status(200).json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err });
    }
});

export { router as indexUserRouter };
