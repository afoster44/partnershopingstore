

export default class Cart {
    constructor({ title, description, price, imgUrl = "", id }) {
        this.title = title
        this.description = description
        this.price = price
        this.imgUrl = imgUrl
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
      <button class="btn btn-success d-flex justify-content-end" onclick="app.cartController.addToCart('test')">Add To Cart</button>
  </div>
</div>
        `
    }
}