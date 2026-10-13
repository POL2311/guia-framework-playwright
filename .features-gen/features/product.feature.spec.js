// Generated from: features/product.feature
import { test } from "../../src/fixtures/test.fixtures.ts";

test.describe('Checkout and Shopping Cart', () => {

  test.beforeEach('Background', async ({ Given, basePage }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to the application login page', null, { basePage }); 
  });
  
  test('Successful login, product navigation and adding item to cart', { tag: ['@product', '@smoke'] }, async ({ When, Then, loginPage, productPage }) => { 
    await When('I enter valid credentials and submit', null, { loginPage }); 
    await Then('I should see the product catalog page', null, { productPage }); 
    await When('I select an item and click on "Add to Cart"', null, { productPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/product.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@product","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the application login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I enter valid credentials and submit","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the product catalog page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I select an item and click on \"Add to Cart\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Add to Cart\"","children":[{"start":31,"value":"Add to Cart","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end