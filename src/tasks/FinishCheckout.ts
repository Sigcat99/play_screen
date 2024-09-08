import { Actor, Sleep, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Hover, Navigate, Wait } from "@testla/screenplay-playwright/web";
import { DetailProduct } from "../userInterface/detailProduct";
import { ChekoutStepTwo } from "../userInterface/ChekoutStepTwo";

export class FinishCheckout  extends Task {



    constructor() {
        super()

    }

    public async performAs(actor: Actor): Promise<any> {



        return actor.attemptsTo(           
            Hover.over(ChekoutStepTwo.FINISH_BUTTON),
            Click.on(ChekoutStepTwo.FINISH_BUTTON),
            Wait.forLoadState("load"),
            Sleep.for(500)

        );
    }


    public static FinishCheckout(): FinishCheckout {
        return new FinishCheckout();
}
}