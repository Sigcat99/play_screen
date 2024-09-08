export class SwagLabsHome{

    private productName:string ;

    constructor(productoName) {
        this.productName=productoName;

} 
    static TITLE_PAGE = '//div[@class = "app_logo"]';

    get PRODUCT_NAME(): string {
        return `//div[@class = "inventory_item_name " and text()="${this.productName}"]`;
    }



}
