import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js"



function _draw() {
    let item = ProxyState.items
    let template = ""
    item.forEach(i => template += i.Template)
    // console.log(template)
    document.getElementById('app').innerHTML = template
    console.log(ProxyState.items)
}
export default class ItemsController {
    constructor() {
        console.log('linked to Items Controller')
        ProxyState.on('items', _draw)
        _draw()
    }
    create() {
        itemsService.create();
    }

}