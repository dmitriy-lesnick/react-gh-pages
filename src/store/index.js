import Cart from "./cart"
import Products from "./products"



class RootStore {
    constructor(api, localStorage) {
        this.products = new Products(this, api)
        this.cart = new Cart(this, api, localStorage)
    }
}


export default function createRootStore(api, localStorage) {
    return new RootStore(api, localStorage)
}