import { createDatabase } from './create-db';
import { createUsersTable } from './create-tables';
import { populateUsersTable } from './populate-tables';

(async () => {
    try {
        await createDatabase();
        await createUsersTable();
        await populateUsersTable();
    } catch (error) {
        console.error('Error initializing database:', error);
    }
})();
