// ES6 Style ----------
class RetiredForagerBee extends ForagerBee { //extends keyword enables you to easily “inherit” from other “classes” their properties and methods
  // set constructor with properties
  // properties you want to inherit from Car must be passed through as parameters
  constructor(age, job, color, food, eat, treasureChest) {
    // When wanting to use properties from previous class Grub/Bee/ForagerBee
    // REMEMBER to use super() and inside delcare the properties you want to use
    // You can then and only then use the 'this' keyword on them
    super(age, job, color, food, eat, treasureChest);
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
