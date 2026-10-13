import {test, type Page} from '@playwright/test'

export class BasePage {
    constructor(private readonly page: Page){}
    async goToWebsite(string: string): Promise<void>{
        await this.page.goto(string);
    }
}
