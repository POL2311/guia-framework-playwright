import {test, type Page } from '@playwright/test'
import { error } from 'node:console';
export class ProductPage{
    constructor(private readonly page: Page){}
    async validateProductPage(): Promise<void>{
         let isVisible = await this.page.locator('.shopping_cart_link').isVisible();
         if(!isVisible){
            console.error('no se encontro la pagina de producto', error);
         }
    }
    async selectFirstItemFromInventory(): Promise<void>{
        const itemsLocator = this.page.locator('#inventory_container .inventory_item');
        await itemsLocator.first().waitFor({ state: 'visible' });
        const itemsContainer = await itemsLocator.all();
        const randomIndex = Math.floor(Math.random() * itemsContainer.length);
        const randomItem = itemsContainer[randomIndex];
        await randomItem.getByRole('button',{name: 'Add to cart'}).click()
        await this.validateProductPage();
    }
    

}