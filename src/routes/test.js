import express from 'express';
// import * as db from '../db/index';

const router = express.Router();

router.get('/api/test', async (req, res) => {
    console.log('Hello, world!');
    res.status(200).send({ payload: 'hello world' });
});

export { router as testRouter };
