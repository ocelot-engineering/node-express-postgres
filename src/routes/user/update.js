import express from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../../utils/validate-request';
import { query } from '../../db/index';

const router = express.Router();

router.put(
    '/api/user/:id',
    [
        body('name').not().isEmpty().withMessage('Name is required'),
        body('email').not().isEmpty().withMessage('Email is required'),
    ],
    validateRequest,
    async (req, res) => {
        const userId = parseInt(req.params.id);
        const { name, email } = req.body;

        try {
            await query(`UPDATE users SET name = '${name}', email = '${email}' WHERE id = ${userId}`);
            res.status(201).send(`Modified user with ID: ${userId}`);
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err });
        }
    }
);

export { router as updateUserRouter };
