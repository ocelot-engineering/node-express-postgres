import express from 'express';
import { pool } from '../../db/index';

const router = express.Router();

router.put('/api/user/:id', async (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    try {
        await pool.query(`UPDATE users SET name = '${name}', email = '${email}' WHERE id = ${userId}`);
        res.status(201).send(`Modified user with ID: ${userId}`);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err });
    }
});

export { router as updateUserRouter };
