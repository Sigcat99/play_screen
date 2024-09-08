import { Actor, Sleep, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Hover, Navigate, Wait } from "@testla/screenplay-playwright/web";
import { DetailProduct } from "../userInterface/detailProduct";

export class AddCard  extends Task {



    constructor() {
        super()

    }

    public async performAs(actor: Actor): Promise<any> {



        return actor.attemptsTo(           
            Hover.over(DetailProduct.ADD_CARD_BUTTON),
            Click.on(DetailProduct.ADD_CARD_BUTTON),
            Wait.forLoadState("load"),

        );
    }


    public static addCard(): AddCard {
        return new AddCard();
}
}