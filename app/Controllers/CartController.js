import { ProxyState } from "../AppState.js";
import { cartService } from "../Services/CartService.js"


function _draw() {
    let item = ProxyState.cartItems
    let template = ''
    item.forEach(i => template += i.Template)
    document.getElementById('cart').innerHTML = template
}

export default class CartController {
    constructor() {
        console.log('linked to Cart Controller!');
        ProxyState.on('cartItems', _draw)
        _draw()
    }

    addToCart(str) {
        console.log(str);
        // let rawCart = {
        //     imgUrl: imgUrl,
        //     title: title,
        //     description: description,
        //     price: price,
        //     id: id
        // }
        // cartService.addToCart(rawCart)
    }
}