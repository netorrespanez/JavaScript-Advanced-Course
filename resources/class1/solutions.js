//Q1

/**
 * a) It will not crash. The JavaScript engine will make array slots 3 through 9 be “empty slots.”
 * b) Here, a[6] will output undefined, but the slot still remains empty rather than filled with undefined. This may be an important nuance in some cases. For example, when using map(), empty slots will remain empty in map()’s output, but undefined slots will be remapped using the function passed to it:
 * 
 */

var b = [undefined];
b[2] = 1;
console.log(b);             // (3) [undefined, empty × 1, 1]
console.log(b.map(e => 7)); // (3) [7,         empty × 1, 7]

//Q2

var obj = {a: 1 ,b: 2}
var objclone = Object.assign({},obj);
//Now the value of objclone is {a: 1 ,b: 2} but points to a different object than obj.
//Note the potential pitfall, though: Object.assign() will just do a shallow copy, not a deep copy. This means that nested objects aren’t copied. They still refer to the same nested objects as the original:

let obj = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};

var objclone = Object.assign({},obj);
console.log('objclone: ', objclone);

obj.c.age = 45;
console.log('After Change - obj: ', obj);           // 45 - This also changes
console.log('After Change - objclone: ', objclone); // 45

//Q3

/**
 * The output of this code will be 456 (not 123).
 * The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. 
 * In this case, since b and c are both objects, they will both be converted to "[object Object]". 
 * As a result, a[b] and a[c] are both equivalent to a["[object Object]"] and can be used interchangeably. 
 * Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b]
 */

 //Q4

 /**
  * true
  * False
  * In JavaScript, there are two sets of equality operators. 
  * The triple-equal operator === behaves like any traditional equality operator would: 
  *     evaluates to true if the two expressions on either of its sides have the same type and the same value. 
  * The double-equal operator, however, tries to coerce the values before comparing them. 
  * It is therefore generally good practice to use the === rather than ==. The same holds true for !== vs !=.
  */

//Q5
"122"
"32"
"02"
"112"
"NaN2"
NaN

//Q6
/**
 * Since both a and b are defined within the enclosing scope of the function, 
 * and since the line they are on begins with the var keyword, 
 * most JavaScript developers would expect typeof a and typeof b to both be undefined in the above example.
 * However, that is not the case. The issue here is that most developers incorrectly understand the statement var a = b = 3; to be shorthand for:
 */

var b = 3;
var a = b;
//But in fact, var a = b = 3; is actually shorthand for:

b = 3;
var a = b;
//As a result (if you are not using strict mode), the output of the code snippet would be:

//a defined? false
//b defined? true
/**
 * 
 * But how can b be defined outside of the scope of the enclosing function? Well, since the statement var a = b = 3; is shorthand for the statements b = 3; and var a = b;, b ends up being a global variable (since it is not preceded by the var keyword) and is therefore still in scope even outside of the enclosing function.
 * Note that, in strict mode (i.e., with use strict), the statement var a = b = 3; will generate a runtime error of ReferenceError: b is not defined, thereby avoiding any headfakes/bugs that might othewise result. (Yet another prime example of why you should use use strict as a matter of course in your code!)
 */


 //Q7
 1
 4
 3
 2

 //Q8

 function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
  }

//test
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'


//Q9

function sum(x, y) {
    if (y !== undefined) {
      return x + y;
    } else {
      return function(y) { return x + y; }; 
    }
  }

//Q10
/**
 * The snippet of code shown above sets two properties on the object d. 
 * Ideally, any lookup performed on a JavaScript object with an unset key evaluates to undefined. 
 * But running this code marks those properties as “own properties” of the object.
 * This is a useful strategy for ensuring that an object has a given set of properties. 
 * Passing this object to Object.keys will return an array with those set keys as well (even if their values are undefined).
 */