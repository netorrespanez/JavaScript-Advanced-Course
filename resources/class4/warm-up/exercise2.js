// define a function
var myFunction = function () {
    console.log(this);
  };

  // call it
  myFunction();


// create an object
var myObject = {};

// create a method on our object
myObject.someMethod = function () {
  console.log(this); // myObject
};

// call our method
myObject.someMethod();


// let's assume .elem is <div class="elem"></div>
var element = document.querySelector('.elem');
var someMethod = function () {
  console.log(this);
};
element.addEventListener('click', someMethod, false);

/**
 * There are often many reasons why we need to change the context of a function,
 * and thankfully we have a few methods at our disposal, these being .call(), .apply() and .bind().
 *
 * Using any of the above will allow you to change the context of a function,
 * which in effect will change the this value.
 * You’ll use this when you want this to refer to something different than the scope it’s in.
 */

someMethod.call(anotherScope, arg1, arg1); // commas
someMethod.apply(anotherScope, [arg1, arg1]); // array


var numbers = [{
    name: 'Mark'
  },{
    name: 'Tom'
  },{
    name: 'Travis'
  }];
  numbers.forEach(function () {
    console.log(this); // window
  });


  var numbers = [{
    name: 'Mark'
  },{
    name: 'Tom'
  },{
    name: 'Travis'
  }];
  for (var i = 0; i < numbers.length; i++) {
    (function () {
      console.log(this.name); // Mark, Tom, Travis
    }).call(numbers[i]);
	}
	

	/**
	 * .bind()
	 * Using .bind() is an ECMAScript 5 addition to JavaScript, which means it’s not supported in all browsers 
	 * (but can be polyfilled so you’re all good if you need it). Bind has the same effect as .call(), 
	 * but instead binds the function’s context prior to being invoked, this is essential to understand the difference. 
	 * Using .bind() will not invoke the function, it just “sets it up”.
	 * 
	 * Here’s a really quick example of how you’d setup the context for a function, 
	 * I’ve used .bind() to change the context of the function, which by default the this value would be the window Object.
	 */

	var obj = {};
	var someMethod = function () {
		console.log(this); // this = obj
	}.bind(obj);
	someMethod();


	var obj = {};
	var element = document.querySelector('.elem');
	var someMethod = function () {
		console.log(this);
	};
	element.addEventListener('click', someMethod.bind(obj), false); // bind


	//“Jumping scope”


	var obj = {};
obj.myMethod = function () {
  console.log(this); // this = obj
    setTimeout(function () {
        console.log(this); // window object :O!!!
    }, 100);
};
obj.myMethod();

//b
var obj = {};
obj.myMethod = function () {
  console.log(this); // this = obj
    setTimeout(function () {
        console.log(this); // this = obj
    }.bind(this), 100); // .bind() #ftw
};
obj.myMethod();


//c
var obj = {};
obj.myMethod = function () {
  var that = this;
  console.log(this); // this = obj
    setTimeout(function () {
        console.log(that); // that (this) = obj
    }, 100);
};
obj.myMethod();