import { test, expect } from '../src/fixtures/test';
import { DataFactory } from '../src/utils/dataFactory';

test.describe('Practice Form', () => {
  test('should submit practice form successfully', async ({ openPracticeForm, practiceFormPage }) => {
    const formData = DataFactory.createPracticeFormData();

    await openPracticeForm();
    await practiceFormPage.fillForm(formData);
    await practiceFormPage.submit();

    const modal = practiceFormPage.getConfirmationModal();
    await expect(modal).toBeVisible();
    await expect(modal).toContainText('Thanks for submitting the form');
    await expect(modal).toContainText(`${formData.firstName} ${formData.lastName}`);
    await expect(modal).toContainText(formData.email);
    await expect(modal).toContainText(formData.mobile);
  });
});
