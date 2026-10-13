import { createBdd } from "playwright-bdd";
import {test} from '../fixtures/test.fixtures'
const {Given, When, Then} = createBdd(test);

Then('I should see the product catalog page',async({productPage})=>{
    await productPage.validateProductPage();
});
When('I select an item and click on {string}', async({ productPage }, name: string)=>{
    await productPage.selectFirstItemFromInventory();
});
