import { expect, test } from '@playwright/test'
test('agregar una tarea', async ({ page }) => {
await page.goto('./');
const input = page.getByPlaceholder('What needs to be done?');
await input.fill('Aprender Playwright');
await input.press('Enter');
const fila = page.locator('.todo-list li').filter({
has: page.getByText('Aprender Playwright', { exact: true }),
});
await expect(fila).toBeVisible();
await expect(page.locator('.todo-list li')).toHaveCount(1);
await expect(input).toHaveValue('');
});
