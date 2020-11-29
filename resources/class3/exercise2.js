/**
 * Arrow Functions
 */

//Arrow functions are always anonymous, which means we can’t do this with ES6
// ES5
function doSomething() {
    //...
  }

// ES6
//Instead of this, we could assign our anonymous arrow function it to a variable
var doSomething = () => {
    //...
  }

var numbers = [1,2,3,4,5];
var timesTwo = numbers.map(function (number) {
    return number * 2;
});
  console.log(timesTwo); // [2, 4, 6, 8, 10]

var numbers = [1,2,3,4,5];
var timesTwo = numbers.map((number) => number * 2);
console.log(timesTwo); // [2, 4, 6, 8, 10]


//Syntax: single argument functions
numbers.map((number) => number * 2);
//numbers.map(number => number * 2);

function f1(x) {
  let z = 200; //this.z
  let w = () => console.log(z) 
}
//

/**
 * Functionality: lexical scoping “this”
 * 
 * Typically if we’re writing ES5, we’ll use something like Function.prototype.bind 
 * to grab the this value from another scope to change a function’s execution context. 
 * This will mainly be used in callbacks inside a different scope.
 */

function FooCtrl (FooService) {
    this.foo = 'Hello';
    FooService
    .doSomething(function myFoo(){
      this.foo+= 'Developers'
    });
  }

/**
 * The interesting thing to note is that the this value (internally) is not actually bound to the arrow function. 
 * Normal functions in JavaScript bind their own this value, 
 * however the this value used in arrow functions is actually fetched lexically from the scope it sits inside. 
 * It has no this, so when you use this you’re talking to the outer scope.
 */