import Controller from '@ember/controller';

export default class CartController extends Controller {
  taxRate = 0.09;
  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }
  get tax() {
    return this.taxRate * this.subtotal;
  }
  get total() {
    return this.tax + this.subtotal;
  }

  //   setupController(controller, model) {
  //     super.setupController(controller, model);
  //     const subtotal = model.reduce((acc, item) => {
  //       return acc + item.price;
  //     }, 0);

  //     controller.set('subtotal', subtotal);
  //   }
}
