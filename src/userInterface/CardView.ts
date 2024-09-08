export class CardView {


    private productName:string ;

    constructor(productoName) {
        this.productName=productoName;

} 
    get PRODUCT_NAME(): string {
        return `//div[@class = "inventory_item_name" and contains(text(),"${this.productName}")]`;
    }


    static  CHECKOUT_BUTTON:string = '#checkout';



}