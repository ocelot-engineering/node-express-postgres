import { testRouter } from './test';
import { indexUserRouter } from './user/index';
import { showUserRouter } from './user/show';
import { newUserRouter } from './user/new';
import { updateUserRouter } from './user/update';

const mountRoutes = (app) => {
    app.use(testRouter);
    app.use(indexUserRouter);
    app.use(showUserRouter);
    app.use(newUserRouter);
    app.use(updateUserRouter);
};

export default mountRoutes;
