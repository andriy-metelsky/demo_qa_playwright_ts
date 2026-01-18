import { test, expect } from '../src/fixtures/test';

test.describe('Alerts', () => {
  test.beforeEach(async ({ openAlerts }) => {
    await openAlerts();
  });

  test('should handle simple alert', async ({ page, alertsPage }) => {
    const [dialog] = await Promise.all([
      page.waitForEvent('dialog'),
      alertsPage.triggerSimpleAlert(),
    ]);

    expect(dialog.message()).toBe('You clicked a button');
    await dialog.accept();
  });

  test('should handle confirm alert (accept & dismiss)', async ({ page, alertsPage }) => {
    // Accept
    const [acceptDialog] = await Promise.all([
      page.waitForEvent('dialog'),
      alertsPage.triggerConfirmAlert(),
    ]);
    await acceptDialog.accept();
    await expect(alertsPage.getConfirmResult()).toContainText('You selected Ok');

    // Dismiss
    const [dismissDialog] = await Promise.all([
      page.waitForEvent('dialog'),
      alertsPage.triggerConfirmAlert(),
    ]);
    await dismissDialog.dismiss();
    await expect(alertsPage.getConfirmResult()).toContainText('You selected Cancel');
  });

  test('should handle prompt alert', async ({ page, alertsPage }) => {
    const promptText = 'Staff SDET';
    const [dialog] = await Promise.all([
      page.waitForEvent('dialog'),
      alertsPage.triggerPromptAlert(),
    ]);
    
    await dialog.accept(promptText);
    await expect(alertsPage.getPromptResult()).toContainText(`You entered ${promptText}`);
  });
});
