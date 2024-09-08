import { Page } from "@playwright/test";
import { Ability } from "@testla/screenplay-playwright";

export class BrowserAbility extends Ability  {
    
    private page;
    private constructor(page: Page) {
        super();
        this.page = page;
    }


    public async scroll(url: string): Promise<void> {
        return this.page.frameLocator;
    }

}