class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;  
  }  
}

const product1 = new Product("Coffee Maker", 99, true);

//
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;  
  } 
}

class SaleProduct extends Product {
  constructor(percentOff) {
     this.percentOff = percentOff; 
  }  
}

const product1 = new SaleProduct("Coffee Maker", 99, true, 20);

//Super constructor call

class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;  
  }  
}

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
     super(name, price, discountable);
     this.percentOff = percentOff; 
  }  
}

const product1 = new SaleProduct("Coffee Maker", 99, true, 20);
console.log(product1)


//Share methods
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;  
  }  
  
  isDiscountable() {
    return this.discountable;  
  }
}

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
     super(name, price, discountable);
     this.percentOff = percentOff; 
  }  
  
  getSalePrice() {
    return  super.isDiscountable() ? this.price * ((100 - this.percentOff) / 100) : `${this.name} is not eligible for a discount`;
  }
}

const saleProduct1 = new SaleProduct("Coffee Maker", 99, true, 20);
console.log(saleProduct1.getSalePrice())