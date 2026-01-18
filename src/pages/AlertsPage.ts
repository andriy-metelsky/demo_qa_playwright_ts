import { Locator, Page } from '@playwright/test';

export class AlertsPage {
  private readonly simpleAlertButton: Locator;
  private readonly confirmAlertButton: Locator;
  private readonly promptAlertButton: Locator;

  constructor(private readonly page: Page) {
    this.simpleAlertButton = page.locator('#alertButton');
    this.confirmAlertButton = page.locator('#confirmButton');
    this.promptAlertButton = page.locator('#promtButton');
  }

  async triggerSimpleAlert() {
    await this.simpleAlertButton.click();
  }

  async triggerConfirmAlert() {
    await this.confirmAlertButton.click();
  }

  async triggerPromptAlert() {
    await this.promptAlertButton.click();
  }

  getConfirmResult(): Locator {
    return this.page.locator('#confirmResult');
  }

  getPromptResult(): Locator {
    return this.page.locator('#promptResult');
  }
}
