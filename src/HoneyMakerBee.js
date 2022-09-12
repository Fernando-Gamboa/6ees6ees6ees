// ES6 Style ----------
class HoneyMakerBee extends Bee { //extends keyword enables you to easily “inherit” from other “classes” their properties and methods
  // set constructor with properties
  constructor() {
    // When wanting to use properties from previous class Grub/Bee
    // REMEMBER to use super()
    // You can then and only then use the 'this' keyword to modify or inherit
    super();
    this. age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  // Methods Begin Here -----
  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
}
