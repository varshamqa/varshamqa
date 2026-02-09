const { test, expect } = require('@playwright/test');

test('Canvas Login Page Tests', async ({ page }) => {
    await page.goto('https://canvasqa.servient.net/ng/#/login');
    //const pageTitle = await page.title();
    // console.log('Page title is', pageTitle);
    //await expect(page).toHaveTitle('PrivateAI');
    const pageURL = page.url('https://canvasqa.servient.net/ng/#/login');
    await expect(page).toHaveURL('https://canvasqa.servient.net/ng/#/login');
    await page.click('id=mat-input-0');
    await page.fill('id=mat-input-0', 'sanu.c@gmail.com');
    await page.click('id=mat-input-1');
    await page.fill('id=mat-input-1', 'Sanavi@2014');
    await page.click("button[class='mat-focus-indicator ser-button submit-btn mat-flat-button mat-button-base mat-primary']");
    await page.close();
})