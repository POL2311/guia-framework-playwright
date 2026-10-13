import {expect, type Page,type Locator} from '@playwright/test'
export class TodoPage{
    constructor(private readonly page: Page){ }
    async open(): Promise<void>{
        await this.page.goto('./');
    }
    private row(name: string): Locator{
        return this.page.locator('.todo-list li').filter({
        has: this.page.getByText(name, { exact: true }),
        });
    }
    async addTodo(name: string): Promise<void>{
        const input = await this.page.getByPlaceholder('What needs to be done?');
        await input.fill(name);
        await input.press('Enter');
    }

    async expectTodoVisible(name: string): Promise<void>{
        await this.row(name).getByRole('checkbox').check();
    }
    async expectTodoVisible2items(name: string, name2: string): Promise<void>{
        await this.row(name).getByRole('checkbox').check();
        await this.row(name2).getByRole('checkbox').check();
    }
    async completeTodo(name: string): Promise<void>{
        await this.row(name).getByRole('checkbox').check();
    }
    async expectTodoCompleted(name: string): Promise<void>{
        await expect(this.row(name).getByRole('checkbox')).toBeChecked();
    }
    async expectTodoCount(count: number): Promise<void>{
        await expect(this.page.locator('.todo-list li')).toHaveCount(count);
    }
}