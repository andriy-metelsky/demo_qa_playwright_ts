import { Locator, Page } from '@playwright/test';
import { WebTableUser } from '../types/demoqa';

export class WebTablesPage {
  private readonly addButton: Locator;
  private readonly searchInput: Locator;
  private readonly registrationForm: Locator;

  constructor(private readonly page: Page) {
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.searchInput = page.getByPlaceholder('Type to search');
    this.registrationForm = page.locator('#registration-form-modal');
  }

  async addRecord(user: WebTableUser) {
    await this.addButton.click();
    await this.fillRegistrationForm(user);
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async editRecord(email: string, updatedUser: Partial<WebTableUser>) {
    const row = this.getRowByEmail(email);
    await row.getByRole('gridcell').locator('span[title="Edit"]').click();
    await this.fillRegistrationForm(updatedUser);
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async deleteRecord(email: string) {
    const row = this.getRowByEmail(email);
    await row.getByRole('gridcell').locator('span[title="Delete"]').click();
  }

  async search(text: string) {
    await this.searchInput.fill(text);
  }

  getRowByEmail(email: string): Locator {
    return this.page.locator('.rt-tr-group', { hasText: email });
  }

  private async fillRegistrationForm(user: Partial<WebTableUser>) {
    if (user.firstName) await this.page.getByPlaceholder('First Name').fill(user.firstName);
    if (user.lastName) await this.page.getByPlaceholder('Last Name').fill(user.lastName);
    if (user.email) await this.page.getByPlaceholder('name@example.com').fill(user.email);
    if (user.age) await this.page.getByPlaceholder('Age').fill(user.age.toString());
    if (user.salary) await this.page.getByPlaceholder('Salary').fill(user.salary.toString());
    if (user.department) await this.page.getByPlaceholder('Department').fill(user.department);
  }
}

// Adding a helper to Page prototype or just keep it as a method in POM. 
// I'll keep it in POM for simplicity in this structure.
