/**
 * How To Get, Set and Simplify Classes
 */

class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }

  getClearancePrice() {
    return this.price * 0.5;
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);
product1.price = {};
console.log(product1.getClearancePrice())

// Add getters

class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }

  get clearancePrice() {
    return this.price * 0.5;
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);
// product1.price = {};
console.log(product1.clearancePrice);

/**
 * New Class: Person
 */

 class Person {
   constructor(age, name, lastname){
     this.age = age;
     this.name = name;
     this.lastname = lastname;
   }

   get fullName() {
     return this.name + ' ' + this.lastname
   }
 }

 let p1 = new Person(21, 'Estefania', 'Torres');
 p1.fullName





//Setter
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }

  get clearancePrice() {
    return this.price * 0.5;
  }

  set newPrice(price) {
    let newPrice = typeof price !== 'number' ? this.price : price;
     this.price = newPrice;
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);
// product1.price = {};
// console.log(product1.clearancePrice);
product1.newPrice = 20;
console.log(product1.newPrice);

//private property

class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this._price = price;
    this.discountable = discountable;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    if (typeof price !== "number") {
      return this._price;
    } else {
      this._price = price;
    }
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);
product1.price = 'aslfdjkas'
console.log(product1.price);