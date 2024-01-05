import path from 'path';
import { executeSQLFile } from './index';

/**
 * Creates the users table in the database.
 * @returns {Promise<void>} A promise that resolves when the table is created.
 */
export async function createUsersTable() {
    const sqlFilePath = path.join(__dirname, './ddl/users.sql');
    await executeSQLFile(sqlFilePath);
}
