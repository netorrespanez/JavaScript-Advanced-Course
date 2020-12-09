/**
 * In JavaScript, all the code shares a single global namespace which is simply a single global object
 * that holds all global variables and functions as properties. In the browser this is the window object. 
 * This tends to pollute the global scope if you have many objects. In the example below, 
 * num, obj, str, total, numr, and sum are all added to the global object:
 */

var num = 5;
var obj = {};
var str = "Good morning";
function sum(x, y){
   total = x + y;
   return total;
}
numr = sum(4,3);


//JavaScript and namespaces
var MYAPP = {
   name: 'Steph',
   lastname: 'Torres',
   age: 21,
   fullname: this.name + this.lastname
};        // our unique namespace  
MYAPP.num = 5;
MYAPP.obj = {};
MYAPP.str = "Good morning";
MYAPP.sum = function(x, y) {
   var total = this.age + y;
   return total;
}
MYAPP.num = MYAPP.sum(4,3);

var num = () => { console.log('Hi')}