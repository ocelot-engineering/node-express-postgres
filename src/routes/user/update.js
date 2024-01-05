import express from 'express';
import { pool } from '../../db/index';

const router = express.Router();

router.put('/api/user/:id', async (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    pool.query(`UPDATE users SET name = '${name}', email = '${email}' WHERE id = ${userId}`, (error, results) => {
        if (error) {
            res.status(500).send({ error: error });
            throw error;
        }
        res.status(201).send(`Modified user with ID: ${userId}`);
    });
});

export { router as updateUserRouter };
