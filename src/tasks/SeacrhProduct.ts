import { Actor, Sleep, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Hover, Navigate, Wait } from "@testla/screenplay-playwright/web";
import { SwagLabsHome } from "../userInterface/SwagLabsHome";


export class SearchProducts  extends Task {

    private productName:string;

    constructor(productName) {
        super()
        this.productName= productName;
    }

    public async performAs(actor: Actor): Promise<any> {

        const swagLab = new SwagLabsHome(this.productName);

        return actor.attemptsTo(           
            Hover.over(swagLab.PRODUCT_NAME),
            Click.on(swagLab.PRODUCT_NAME),
            Wait.forLoadState("load"),
        );
    }


    public static seachP(productName): SearchProducts {
        return new SearchProducts(productName);
}
}