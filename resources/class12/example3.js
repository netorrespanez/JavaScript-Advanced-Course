//Using modules in JavaScript

/**
 * The solution in JavaScript is to build modules in which to organize your code. 
 * What is a module? A module is a self-contained piece of code that groups 
 * semantically-related variables and functions. 
 * Modules are not built-in constructs in JavaScript, but the JavaScript Module Pattern provides 
 * a way to create modules which have well-defined interfaces that are exposed to clients of the module.
 * 
 * An important advantage of modules is that the internal functionality can be modified 
 * whenever necessary without affecting the rest of your program. 
 * This promotes encapsulation and information hiding.
 * To define a module in JavaScript, you take advantage of 
 * anonymous closures by creating an anonymous immediate function.
 * That is a mouthful, but in reality it is not too complicated. 
 * Once you've seen a few modules, you'll understand how they work.
 */



// we cant see privateMethod  y privateVariable --> cierres
//x 

var MODULE = (function () {
  var module = {}; 
  var privateVariable = 4;

  //y
  function privateMethod() {
      // ..
  }

  module.moduleProperty = 1;
  module.moduleMethod = function () {
      // ...
  };
  return module;
}());


//// Modules - allow us to share code between files