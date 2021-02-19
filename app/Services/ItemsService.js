import { ProxyState } from "../AppState.js";



class ItemsService {
    constructor() {
        console.log('your linked to Items Service');
    }
    create() {
        console.log('hello');
    }
}

export const itemsService = new ItemsService()