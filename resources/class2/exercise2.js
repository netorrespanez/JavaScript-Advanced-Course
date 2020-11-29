/**
 * What is Object destructuring?
 * Object destructuring allows us to create variables from object property names, 
 * and the variable will contain the value of the property name
 */

const data = { a: 1, b: 2, c: 3 };

//By using const { a, b, c } = data we are declaring 3 new variables (a, b and c).
//If a, b and c exist as property names on data, then we variables will be created containing the values of the object properties. 
//If the property names do not exist, you’ll get undefined.

const { a, b, c } = data;

// {a: 1}
// {b: 2}
// {c: 3}
console.log(a, b, c); // 1, 2, 3

/**
 * …rest in Object destructuring
 */

//NOTE: First came rest parameters, then came rest properties!

const data = { a: 1, b: 2, c: 3 };

const { a, ...rest } = data;

console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }


/**
 * Technically, it’s been excluded rather than physically “removed” from the object - 
 * and it follows an immutable pattern for writing JavaScript and managing state (state being our data).
 */


const data = { a: 1, b: 2, c: 3 };

const a = {a: data.a}
const rest = { b: data.b, c: data.c };

console.log(a); // {a: 1}
console.log(rest); // { b: 2, c: 3 }

/**
 * Dynamically removing a property by key
 */


/**
 * Let’s assume we have 'b' as a value somewhere, we can dynamically pass this into our destructuring syntax 
 * using square brackets syntax [removeProp], 
 * just like an object lookup (instead this creates a new variable based off the dynamically passed value):
 */
const data = { a: 1, b: 2, c: 3 };
const removeProp = 'b';
const { [removeProp]: remove } = data;

console.log(remove); // 2

//However, at this point we can again introduce the rest syntax to remove the property from the object:
const data = { a: 1, b: 2, c: 3 };

const removeProp = 'b';

const { [removeProp]: remove, ...rest } = data;

console.log(remove); // 2
console.log(rest); // { a: 1, c: 3 }