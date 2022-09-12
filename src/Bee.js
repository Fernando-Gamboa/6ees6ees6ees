// ES6 Style ----------
class Bee extends Grub { //extends keyword enables you to easily “inherit” from other “classes” their properties and methods

  // set constructor with properties
  // properties you want to inherit from Car must be passed through as parameters
  constructor(age, color, food, eat) {
    // When wanting to use properties from previous class Grub
    // REMEMBER to use super() and inside delcare the properties you want to use
    // You can then and only then use the 'this' keyword on them
    super(age, color, food, eat);
    this. age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }

  // Methods Inherited from Car using 'extends' -----
}
