// ES6 Style ----------
class HoneyMakerBee extends Bee { //extends keyword enables you to easily “inherit” from other “classes” their properties and methods
  // set constructor with properties
  // properties you want to inherit from Car must be passed through as parameters
  constructor(age, job, color, food, eat) {
    // When wanting to use properties from previous class Grub/Bee
    // REMEMBER to use super() and inside delcare the properties you want to use
    // You can then and only then use the 'this' keyword on them
    super(age, job, color, food, eat);
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
