import { test, expect } from '../src/fixtures/test';
import { DataFactory } from '../src/utils/dataFactory';

test.describe('Web Tables', () => {
  test('should manage records in web table', async ({ openWebTables, webTablesPage }) => {
    const user = DataFactory.createWebTableUser();
    const updatedFirstName = 'Bob';

    await openWebTables();

    // Add
    await webTablesPage.addRecord(user);
    const addedRow = webTablesPage.getRowByEmail(user.email);
    await expect(addedRow).toBeVisible();
    await expect(addedRow).toContainText(user.firstName);

    // Edit
    await webTablesPage.editRecord(user.email, { firstName: updatedFirstName });
    await expect(addedRow).toContainText(updatedFirstName);

    // Delete
    await webTablesPage.deleteRecord(user.email);
    await expect(addedRow).not.toBeVisible();
  });
});
