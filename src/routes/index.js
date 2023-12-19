import { testRouter } from './test';
import { userRouter } from './user';

const mountRoutes = (app) => {
    app.use(testRouter);
    app.use(userRouter);
};

export default mountRoutes;
