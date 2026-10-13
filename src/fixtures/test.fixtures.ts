import { test as base } from 'playwright-bdd';
import { TodoPage } from '../pages/todo.page';
import { BasePage } from '../pages/base.page';
import { ProductPage } from '../pages/product.page'
import { LoginPage } from '../pages/login.page';

type AppFixtures = {
    todoPage: TodoPage;
    basePage: BasePage;
    productPage: ProductPage;
    loginPage: LoginPage;
};

export const test = base.extend<AppFixtures>({
    todoPage: async({ page }, use) =>{
        await use(new TodoPage(page));
    },
    basePage: async({ page }, use) => {
        await use(new BasePage(page));
    },
    productPage: async({ page }, use) => {
        await use(new ProductPage(page));
    },
    loginPage: async({ page }, use) => {
        await use(new LoginPage(page));
    }
});

