import CartController from "./Controllers/CartController.js";
import ItemsController from "./Controllers/ItemsController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  itemsController = new ItemsController()
  cartController = new CartController()
}

window["app"] = new App();
