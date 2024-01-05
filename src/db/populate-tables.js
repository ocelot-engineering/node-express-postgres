import path from 'path';
import { executeSQLFile } from './index';

/**
 * Populates the users table.
 * @returns {Promise<void>} A promise that resolves when the users table is populated.
 */
export async function populateUsersTable() {
    const sqlFilePath = path.join(__dirname, './populate/users.sql');
    await executeSQLFile(sqlFilePath);
}
