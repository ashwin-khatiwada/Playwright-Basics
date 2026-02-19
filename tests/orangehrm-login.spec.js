import { test, expect } from '../fixtures/pomFixtures.js';

test('Login to OrangeHRM successfully', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    // Verify successful login
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('Negative Case: Login to OrangeHRM Fail', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login('Admin', 'asfsa');

    // Verify invalid login
    page.getByRole('alert').filter({ hasText: 'Invalid credentials' });

});