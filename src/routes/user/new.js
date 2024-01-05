import express from 'express';
import { pool } from '../../db/index';

const router = express.Router();

router.post('/api/user', async (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
    };

    try {
        await pool.query(`INSERT INTO users (name, email) VALUES ($1, $2)`, [newUser.name, newUser.email]);
        res.status(201).json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err });
    }
});

export { router as newUserRouter };
