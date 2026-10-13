import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test.fixtures';
const { Given, When, Then } = createBdd(test);
    Given('I am on the Todo application', async ({ todoPage }) => {
    await todoPage.open();
    });
    When('I add the task {string}', async ({ todoPage }, name: string) => {
    await todoPage.addTodo(name);
    });
    Then('I should see the task {string}', async ({ todoPage }, name: string) => {
    await todoPage.expectTodoVisible(name);
    });

    Then('I should see {int} tasks in the list', async ({ todoPage }, count: number) => {
        await todoPage.expectTodoCount(count);
    });

    When('I complete the task {string}', async ({ todoPage }, name: string) => {
    await todoPage.completeTodo(name);
    });
    Then('the task {string} should be completed',
    async ({ todoPage }, name: string) => {
    await todoPage.expectTodoCompleted(name);
    }
);