import { Actor, Sleep, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Hover, Navigate, Wait } from "@testla/screenplay-playwright/web";
import { DetailProduct } from "../userInterface/detailProduct";

export class GoCardView  extends Task {



    constructor() {
        super()

    }

    public async performAs(actor: Actor): Promise<any> {



        return actor.attemptsTo(           
            Hover.over(DetailProduct.CARD_ICON),
            Click.on(DetailProduct.CARD_ICON),
            Wait.forLoadState("load"),
            Sleep.for(500)

        );
    }


    public static cardView(): GoCardView {
        return new GoCardView();
}
}