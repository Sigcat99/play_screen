import { test, expect } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb ,Element} from '@testla/screenplay-playwright/web';
import { Login } from '../src/tasks/Login';
import { SwagLabsHome } from '../src/userInterface/SwagLabsHome';
import { SearchProducts } from '../src/tasks/SeacrhProduct';
import { DetailProduct } from '../src/userInterface/detailProduct';


let productName:string ="Sauce Labs Fleece Jacket";
let url:string ="https://www.saucedemo.com/";
let username:string = "standard_user";
let password:string = "secret_sauce";


test('has title', async ({ page }) => {
  const user = Actor.named("usuario").can(BrowseTheWeb.using(page));

  await test.step('Inicio de sesión', async () => {
    await user.attemptsTo(Login.toApp(url,username,password));
    await test.step('Validacion Inicio de sesión', async () => {
      await user.asks(Element.toBe.visible(SwagLabsHome.TITLE_PAGE));

  });
});
  await test.step('Búsqueda de productos', async () => {
      await user.attemptsTo(
        SearchProducts.seachP(productName)
      );
      await test.step('Validacion de carga pagina detalles de producto ', async () => {
        const detalles = new DetailProduct(productName);
        await user.asks(Element.toBe.visible(DetailProduct.PRODUCT_IMAGE));
        await user.asks(Element.toBe.visible(detalles.PRODUCT_NAME));

        //https://www.saucedemo.com/inventory.html
    });
});
    
 
});


