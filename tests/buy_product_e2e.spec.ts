import { test, expect } from '@playwright/test';
import { Actor, Sleep } from '@testla/screenplay-playwright';
import { BrowseTheWeb ,Click,Element} from '@testla/screenplay-playwright/web';
import { Login } from '../src/tasks/Login';
import { SwagLabsHome } from '../src/userInterface/SwagLabsHome';
import { SearchProducts } from '../src/tasks/SeacrhProduct';
import { DetailProduct } from '../src/userInterface/detailProduct';
import { AddCard } from '../src/tasks/AddCard';
import { GoCardView } from '../src/tasks/GoCardView';
import { CardView } from '../src/userInterface/CardView';
import { CheckoutProcess } from '../src/tasks/CheckoutProcess';
import { ChekoutStepTwo } from '../src/userInterface/ChekoutStepTwo';
import { CheckoutComplete } from '../src/userInterface/CheckoutComplete';
import { FinishCheckout } from '../src/tasks/FinishCheckout';



let url:string ="https://www.saucedemo.com/";
let username:string = "standard_user";
let password:string = "secret_sauce";
let productName:string ="Sauce Labs Fleece Jacket";


let userData = {
  name:"prueba",
  lastName:"compra",
  postalCode:"200000",
}

let msgComplete = {
title :"Thank you for your order!",
msg : "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
}


test('todo el flujo de compra  ', async ({ page }) => {

  const user = Actor.named("usuario").can(BrowseTheWeb.using(page));


    await test.step('Inicio de sesión', async () => {
      await user.attemptsTo(Login.toApp(url,username,password));
      await test.step('Validacion Inicio de sesión', async () => {
        await user.asks(Element.toBe.visible(SwagLabsHome.TITLE_PAGE));
        //https://www.saucedemo.com/inventory.html
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

    await test.step('Agregar al carrito', async () => {
      await user.attemptsTo(AddCard.addCard());
      await test.step('Validacion añadir producto', async () => {
        await user.asks(Element.toBe.visible(DetailProduct.REMOVE_BUTTON));
        await user.asks(Element.toBe.visible(DetailProduct.CARD_COUNT));
    });
  });

    await test.step(' Proceso de compra', async () => {
      await user.attemptsTo(GoCardView.cardView());

      await test.step('Validacion del mproducto en la lista del carrito ', async () => {
        const producto = new CardView(productName);
        await user.asks(Element.toBe.visible(producto.PRODUCT_NAME));

    });
    await test.step('llenado de datos para compra', async () => {
      await user.attemptsTo(CheckoutProcess.checkoutProcess(userData));
    });

  await test.step('Validacion del producto en la lista del carrito y finalizacion de compra', async () => {
    const productoCard = new ChekoutStepTwo(productName);
    await user.asks(Element.toBe.visible(productoCard.PRODUCT_NAME));
    await user.attemptsTo(FinishCheckout.FinishCheckout());
    });

await test.step('Validacion de Compra exitosa ', async () => {

  await user.asks(Element.toHave.text(CheckoutComplete.MSG_TITLE,msgComplete.title));
  await user.asks(Element.toHave.text(CheckoutComplete.MSG_COMPLETE,msgComplete.msg));
  
    });

  });
    
});


