// ES6 Style ----------
class RetiredForagerBee extends ForagerBee { //extends keyword enables you to easily “inherit” from other “classes” their properties and methods
  // set constructor with properties
  constructor() {
    // When wanting to use properties from previous class Grub/Bee/ForagerBee
    // REMEMBER to use super()
    // You can then and only then use the 'this' keyword to modify or inherit
    super();
    this. age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }

  // Methods Begin Here -----
  forage() {
    return 'I am too old, let me play cards instead';
  }

  gamble() {
    this.treasureChest.push('treasure');
  }
}
