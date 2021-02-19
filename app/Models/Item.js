import { generateId } from "../Utils/GenerateId.js"

export default class Item {
    constructor({ imgUrl, title, description, price, id = generateId() }) {
        this.imgUrl = imgUrl
        this.title = title
        this.description = description
        this.price = price
        this.id = id
    }

    get Template() {
        return /* html */ `
        <div class="card col-3">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.itemsController.delete('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top img-fluid" src="${this.imgUrl}" alt="">
  <div class="card-body">
      <h4 class="card-title">${this.title} </h4>
      <p class="card-text">Description: ${this.description}</p>
      <p class="card-text">Price: ${this.price}</p>
      <button class="btn btn-success d-flex justify-content-end" onclick="app.cartController.addToCart('${this.title}','${this.imgUrl}')">Add To Cart</button>
  </div>
</div> `
    }

}

