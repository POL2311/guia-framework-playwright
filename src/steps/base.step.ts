import { createBdd } from "playwright-bdd";
import {test} from '../fixtures/test.fixtures'
const {Given, When, Then} = createBdd(test);
    Given('I navigate to the application login page', async({ basePage })=>{
        await basePage.goToWebsite('https://www.saucedemo.com')
    });
