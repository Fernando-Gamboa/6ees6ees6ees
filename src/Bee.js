// ES6 Style ----------
class Bee extends Grub { //extends keyword enables you to easily “inherit” from other “classes” their properties and methods

  // set constructor with properties
  constructor() {
    // When wanting to use properties from previous class Grub
    // REMEMBER to use super()
    // You can then and only then use the 'this' keyword to modify or inherit
    super();
    this. age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }

  // Methods Inherited from Car using 'extends' -----
}
