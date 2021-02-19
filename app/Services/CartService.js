import { ProxyState } from "../AppState.js";
import Cart from "../Models/Cart.js";
import Item from "../Models/Item.js";


class CartService {
    constructor() {
        console.log('linked to Cart Service!');
    }

    addToCart(rawCart) {
        ProxyState.cartItems.push(new Cart(rawCart))
    }
}

export const cartService = new CartService()