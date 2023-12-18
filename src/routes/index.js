import { testRouter } from './test';

const mountRoutes = (app) => {
    app.use(testRouter);
};

export default mountRoutes;
