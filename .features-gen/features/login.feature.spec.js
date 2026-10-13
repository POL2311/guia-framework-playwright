// Generated from: features/login.feature
import { test } from "../../src/fixtures/test.fixtures.ts";

test.describe('Login flow', () => {

  test.beforeEach('Background', async ({ Given, basePage }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to the application login page', null, { basePage }); 
  });
  
  test('Successful login with valid credentials', { tag: ['@login', '@smoke'] }, async ({ When, Then, loginPage, productPage }) => { 
    await When('I enter valid credentials and submit', null, { loginPage }); 
    await Then('I should see the product catalog page', null, { productPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@login","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the application login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I enter valid credentials and submit","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the product catalog page","stepMatchArguments":[]}]},
]; // bdd-data-end