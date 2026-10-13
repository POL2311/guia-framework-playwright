import { createBdd } from "playwright-bdd";
import {test} from '../fixtures/test.fixtures'
const {Given, When, Then} = createBdd(test);
    When('I enter valid credentials and submit', async({loginPage})=>{
        await loginPage.loginWithValidCredentials('standard_user','secret_sauce')
    });