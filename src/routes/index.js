import { testRouter } from './test';
import { indexUserRouter } from './user/index';
import { showUserRouter } from './user/show';
import { newUserRouter } from './user/new';
import { updateUserRouter } from './user/update';
import { deleteUserRouter } from './user/delete';

const mountRoutes = (app) => {
    app.use(testRouter);
    app.use(indexUserRouter);
    app.use(showUserRouter);
    app.use(newUserRouter);
    app.use(updateUserRouter);
    app.use(deleteUserRouter);

    app.all('*', async (req, res) => {
        res.status(400).send('Route not known');
    });
};

export default mountRoutes;
