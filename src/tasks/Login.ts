import { Actor, Task } from "@testla/screenplay-playwright";
import { Click, Fill, Navigate, Wait } from "@testla/screenplay-playwright/web";
import { SaucedemoLogin } from "../userInterface/saucedemoLogin";

export class Login  extends Task {

    private urlPage:string;
    private userName:string;
    private password:string;
    constructor(url,userName,password) {
        super()
        this.urlPage= url; 
        this.userName= userName; 
        this.password= password; 
    }

    public async performAs(actor: Actor): Promise<any> {
        return actor.attemptsTo(
            Navigate.to(this.urlPage),
            Fill.in(SaucedemoLogin.USERNAME_INPUT,this.userName ),
            Fill.in(SaucedemoLogin.PASSWORD_INPUT,this.password ),            
            Click.on(SaucedemoLogin.CLICK_BUTTON),
            Wait.forLoadState("load")
        );
    }


    public static toApp(url,userName,password): Login {
        return new Login(url,userName,password);
}
}