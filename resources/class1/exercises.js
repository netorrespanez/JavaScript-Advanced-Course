// Q1
var a = [1, 2, 3];
a[10] = 99;         // Will this result in a crash?
console.log(a[6]);

//Q10
//Assuming d is an “empty” object in scope, say:
var d = {};
//…what is accomplished using the following code?

[ 'zebra', 'horse' ].forEach(function(k) {
    d[k] = undefined;
    //{zebra: undefined, horse: undefined}
});

//Q2
//How do you clone an object?

//Q3
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);

//Q4
console.log(false == '0')
console.log(false === '0')

//Q5
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);

//Q6
(function(){
    var a = b = 3;
  })();

  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

//Q7
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();


//Q8
//Write a simple function (less than 160 characters) 
//that returns a boolean indicating whether or not a string is a palindrome.

//Q9
//Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5