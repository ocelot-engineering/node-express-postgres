import express from 'express';
import { pool } from '../../db/index';

const router = express.Router();

router.post('/api/user', async (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
    };

    pool.query(`INSERT INTO users (name, email) VALUES ($1, $2)`, [newUser.name, newUser.email], (error) => {
        if (error) {
            res.status(500).send({ error: error });
            throw error;
        }
        res.status(201).json(newUser);
    });
});

export { router as newUserRouter };
