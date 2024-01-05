import express from 'express';
import { pool } from '../../db/index';

const router = express.Router();

router.delete('/api/user/:id', async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
        await pool.query(`DELETE FROM users WHERE id = ${userId}`);
        res.status(204).send(`User with ID: ${userId} has been deleted.`);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err });
    }
});

export { router as deleteUserRouter };
