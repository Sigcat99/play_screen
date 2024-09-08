export class DetailProduct {


    private productName:string ;

    constructor(productoName) {
        this.productName=productoName;

} 
    get PRODUCT_NAME(): string {
        return `//div[@class = "inventory_details_name large_size" and text()="${this.productName}"]`;
    }

    static PRODUCT_IMAGE :string = '//div[@class = "inventory_details_img_container"]';
    static ADD_CARD_BUTTON:string='#add-to-cart';
    static REMOVE_BUTTON:string='#remove';
    static CARD_COUNT:string='//span[@class = "shopping_cart_badge"]';
    static CARD_ICON:string='//a[@class = "shopping_cart_link"]';




}