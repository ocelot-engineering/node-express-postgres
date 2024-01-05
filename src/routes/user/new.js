import express from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../../utils/validate-request';
import { query } from '../../db/index';

const router = express.Router();

router.post(
    '/api/user',
    [
        body('name').not().isEmpty().withMessage('Name is required'),
        body('email').not().isEmpty().withMessage('Email is required'),
    ],
    validateRequest,
    async (req, res) => {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
        };

        try {
            await query('INSERT INTO users (name, email) VALUES ($1, $2)', [newUser.name, newUser.email]);
            res.status(201).json(newUser);
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err });
        }
    }
);

export { router as newUserRouter };
