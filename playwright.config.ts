import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';
import { env } from './src/config/env';

const testDir = defineBddConfig({
    features: 'features/**/*.feature',
    steps: ['src/steps/**/*.ts', 'src/fixtures/**/*.ts'],
});

export default defineConfig({
testDir,
fullyParallel: true,
retries: process.env.CI ? 1 : 0,
reporter: [
['list'],
['html', { outputFolder: 'reports/playwright-html', open: 'never' }],
cucumberReporter('json', { outputFile: 'reports/cucumber.json' }),
],
  use: {
    baseURL: env.baseURL,
    headless: env.headless,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
