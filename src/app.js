import express from 'express';
import { json } from 'body-parser';
import mountRoutes from './routes/index';

const app = express();

app.use(json());
mountRoutes(app);

export { app };
