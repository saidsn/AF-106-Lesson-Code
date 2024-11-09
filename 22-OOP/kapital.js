class Kapital {
  discount = 20;

  constructor(name, surname, hasCard, products) {
    this.name = name;
    this.surname = surname;
    this.hasCard = hasCard;
    this.products = products;
  }

  calculate() {
    let total = 0;

    if (this.checkProducts(this.products)) {
      if (this.hasCard) {
        this.products.forEach((product) => {
          total += product.price - (product.price * this.discount) / 100;
        });
      } else {
        this.products.forEach((product) => {
          total += product.price;
        });
      }
    } else {
      alert("Please add products to the cart");
    }
    return total;
  }

  checkProducts(products) {
    if (products != null && products.length > 0) {
      return products;
    } else {
      return false;
    }
  }
}
