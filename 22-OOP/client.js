class Client extends Kapital {
  constructor(name, surname, hasCard, products) {
    super(name, surname, hasCard, products);
  }

  send() {
    return super.calculate();
  }
}
