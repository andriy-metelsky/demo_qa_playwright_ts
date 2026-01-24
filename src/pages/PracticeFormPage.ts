import { Locator, Page } from '@playwright/test';
import { PracticeFormData } from '../types/demoqa';

export class PracticeFormPage {
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly emailInput: Locator;
  private readonly mobileInput: Locator;
  private readonly dateOfBirthInput: Locator;
  private readonly addressInput: Locator;
  private readonly stateDropdown: Locator;
  private readonly cityDropdown: Locator;
  private readonly submitButton: Locator;

  constructor(private readonly page: Page) {
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.emailInput = page.getByPlaceholder('name@example.com');
    this.mobileInput = page.getByPlaceholder('Mobile Number');
    this.dateOfBirthInput = page.locator('#dateOfBirthInput');
    this.addressInput = page.getByPlaceholder('Current Address');
    this.stateDropdown = page.locator('#state');
    this.cityDropdown = page.locator('#city');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async fillForm(data: PracticeFormData) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.page.getByText(data.gender, { exact: true }).click();
    await this.mobileInput.fill(data.mobile);

    await this.dateOfBirthInput.click();
    await this.page.locator('.react-datepicker__month-select').selectOption('9'); // Oct is 9 (0-indexed)
    await this.page.locator('.react-datepicker__year-select').selectOption('1990');
    await this.page.locator('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)').first().click();

    for (const hobby of data.hobbies) {
      await this.page.getByText(hobby, { exact: true }).click();
    }

    await this.addressInput.fill(data.address);
    await this.stateDropdown.click();
    await this.page.getByText(data.state, { exact: true }).click();
    await this.cityDropdown.click();
    await this.page.getByText(data.city, { exact: true }).click();
  }

  async submit() {
    await this.submitButton.click();
  }

  getConfirmationModal() {
    return this.page.locator('.modal-content');
  }
}
