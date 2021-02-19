import Cart from "./Models/Cart.js"
import Item from "./Models/Item.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  /** @type {Item[]} */
  items = [new Item({ imgUrl: "https://i.imgur.com/nYU081x.jpg", title: "Cool Gun", description: "This gun is super f'n cool", price: 10000 })]

  /** @type {Cart[]} */
  cartItems = []
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
