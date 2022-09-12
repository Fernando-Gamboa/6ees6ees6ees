// ES6 Style ----------
class ForagerBee extends Bee { //extends keyword enables you to easily “inherit” from other “classes” their properties and methods
  // set constructor with properties
  constructor() {
    // When wanting to use properties from previous class Grub/Bee
    // REMEMBER to use super()
    // You can then and only then use the 'this' keyword to modify or inherit
    super();
    this. age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  // Methods Begin Here -----
  forage() {
    this.treasureChest.push('treasure');
  }
}
