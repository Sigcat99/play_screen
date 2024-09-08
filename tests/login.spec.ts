import { test } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb,Element } from '@testla/screenplay-playwright/web';
import { Login } from '../src/tasks/Login';
import { SwagLabsHome } from '../src/userInterface/SwagLabsHome';

let url:string ="https://www.saucedemo.com/";
let username:string = "standard_user";
let password:string = "secret_sauce";


test('Login to application', async ({ page }) => {

    const user = Actor.named("usuario").can(BrowseTheWeb.using(page));

    await user.attemptsTo(Login.toApp(url,username,password));
    await user.asks(Element.toBe.visible(SwagLabsHome.TITLE_PAGE));
    



});


