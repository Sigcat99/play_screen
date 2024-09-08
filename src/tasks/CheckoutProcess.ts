import { Actor, Sleep, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Hover, Navigate, Wait } from "@testla/screenplay-playwright/web";
import { DetailProduct } from "../userInterface/detailProduct";
import { ChekoutStepOne } from "../userInterface/ChekoutStepOne";
import { CardView } from "../userInterface/CardView";

export class CheckoutProcess  extends Task {

    private userData;




    constructor(userData) {
        super()
        this.userData = userData;
    }

    public async performAs(actor: Actor): Promise<any> {



        return actor.attemptsTo(        
            Click.on(CardView.CHECKOUT_BUTTON),   
            Wait.forLoadState("load"),
            Sleep.for(200),
            Fill.in(ChekoutStepOne.NAME_INPUT,this.userData.name),
            Fill.in(ChekoutStepOne.LASTNAME_INPUT,this.userData.lastName),
            Fill.in(ChekoutStepOne.POSTAL_CODE_INPUT,this.userData.postalCode),
            Click.on(ChekoutStepOne.CONTINUE_BUTTON),
            Wait.forLoadState("load"),
            Sleep.for(5000)

        );
    }


    public static checkoutProcess(userData): CheckoutProcess {
        return new CheckoutProcess(userData);
}
}