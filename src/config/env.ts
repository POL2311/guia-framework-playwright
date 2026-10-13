import 'dotenv/config';
export const env = {
    baseURL: process.env.BASE_URL
    ?? 'https://demo.playwright.dev/todomvc/',
    headless: process.env.HEADLESS !== 'false'
}