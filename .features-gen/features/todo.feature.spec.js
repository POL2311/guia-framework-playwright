// Generated from: features/todo.feature
import { test } from "../../src/fixtures/test.fixtures.ts";

test.describe('todo management', () => {

  test('Add a new Task', { tag: ['@todo', '@smoke'] }, async ({ Given, When, Then, todoPage }) => { 
    await Given('I am on the Todo application', null, { todoPage }); 
    await When('I add the task "Learn Playwright BDD"', null, { todoPage }); 
    await Then('I should see the task "Learn Playwright BDD"', null, { todoPage }); 
  });

  test.describe('Add tasks with different names', () => {

    test('Example #1', { tag: ['@todo', '@smoke'] }, async ({ Given, When, Then, todoPage }) => { 
      await Given('I am on the Todo application', null, { todoPage }); 
      await When('I add the task "Learn TypeScript"', null, { todoPage }); 
      await Then('I should see the task "Learn TypeScript"', null, { todoPage }); 
    });

    test('Example #2', { tag: ['@todo', '@smoke'] }, async ({ Given, When, Then, todoPage }) => { 
      await Given('I am on the Todo application', null, { todoPage }); 
      await When('I add the task "Review selectors"', null, { todoPage }); 
      await Then('I should see the task "Review selectors"', null, { todoPage }); 
    });

  });

  test('Agregar dos tareas y verificar el total de filas', { tag: ['@todo', '@smoke'] }, async ({ Given, When, Then, And, todoPage }) => { 
    await Given('I am on the Todo application', null, { todoPage }); 
    await When('I add the task "Comprar pan"', null, { todoPage }); 
    await And('I add the task "Estudiar Playwright"', null, { todoPage }); 
    await Then('I should see 2 tasks in the list', null, { todoPage }); 
  });

  test('Complete a task', { tag: ['@todo', '@regression'] }, async ({ Given, When, Then, And, todoPage }) => { 
    await Given('I am on the Todo application', null, { todoPage }); 
    await When('I add the task "Review report"', null, { todoPage }); 
    await And('I complete the task "Review report"', null, { todoPage }); 
    await Then('the task "Review report" should be completed', null, { todoPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/todo.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@todo","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the Todo application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I add the task \"Learn Playwright BDD\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Learn Playwright BDD\"","children":[{"start":16,"value":"Learn Playwright BDD","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the task \"Learn Playwright BDD\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Learn Playwright BDD\"","children":[{"start":23,"value":"Learn Playwright BDD","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":19,"tags":["@todo","@smoke"],"steps":[{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I am on the Todo application","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I add the task \"Learn TypeScript\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Learn TypeScript\"","children":[{"start":16,"value":"Learn TypeScript","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see the task \"Learn TypeScript\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Learn TypeScript\"","children":[{"start":23,"value":"Learn TypeScript","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":20,"tags":["@todo","@smoke"],"steps":[{"pwStepLine":21,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I am on the Todo application","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I add the task \"Review selectors\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Review selectors\"","children":[{"start":16,"value":"Review selectors","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see the task \"Review selectors\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Review selectors\"","children":[{"start":23,"value":"Review selectors","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":23,"tags":["@todo","@smoke"],"steps":[{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given I am on the Todo application","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When I add the task \"Comprar pan\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Comprar pan\"","children":[{"start":16,"value":"Comprar pan","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And I add the task \"Estudiar Playwright\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Estudiar Playwright\"","children":[{"start":16,"value":"Estudiar Playwright","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then I should see 2 tasks in the list","stepMatchArguments":[{"group":{"start":13,"value":"2"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":35,"pickleLine":30,"tags":["@todo","@regression"],"steps":[{"pwStepLine":36,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given I am on the Todo application","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When I add the task \"Review report\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Review report\"","children":[{"start":16,"value":"Review report","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"And I complete the task \"Review report\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Review report\"","children":[{"start":21,"value":"Review report","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then the task \"Review report\" should be completed","stepMatchArguments":[{"group":{"start":9,"value":"\"Review report\"","children":[{"start":10,"value":"Review report","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end