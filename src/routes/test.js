import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    console.log('Hello, world!');
    res.status(200).send({ payload: 'hello world' });
});

export { router as testRouter };
