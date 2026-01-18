import { test as base } from '@playwright/test';
import { PracticeFormPage } from '../pages/PracticeFormPage';
import { WebTablesPage } from '../pages/WebTablesPage';
import { AlertsPage } from '../pages/AlertsPage';

type MyFixtures = {
  practiceFormPage: PracticeFormPage;
  webTablesPage: WebTablesPage;
  alertsPage: AlertsPage;
  openPracticeForm: () => Promise<void>;
  openWebTables: () => Promise<void>;
  openAlerts: () => Promise<void>;
};

export const test = base.extend<MyFixtures>({
  practiceFormPage: async ({ page }, use) => {
    await use(new PracticeFormPage(page));
  },
  webTablesPage: async ({ page }, use) => {
    await use(new WebTablesPage(page));
  },
  alertsPage: async ({ page }, use) => {
    await use(new AlertsPage(page));
  },
  openPracticeForm: async ({ page }, use) => {
    await use(async () => {
      await page.goto('/automation-practice-form');
    });
  },
  openWebTables: async ({ page }, use) => {
    await use(async () => {
      await page.goto('/webtables');
    });
  },
  openAlerts: async ({ page }, use) => {
    await use(async () => {
      await page.goto('/alerts');
    });
  },
});

export { expect } from '@playwright/test';
