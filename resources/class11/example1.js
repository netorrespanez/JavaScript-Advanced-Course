/**
 * What are Js programming paradigms
 * 
 * 
 * What are constructor functions 
 * Learn the prototype chain
 * Use classes for better inheritance
 * How to share features between classes
 * Fix 'this' problems with bind()
 * 
 */

// Constructor functions
const student1 = {
  id: 1,
  name: "Reed",
  subjects: [],
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  }
}

student1.addSubject('Math');
console.log(student1.subjects);

//The problem begins when we have hundreds of students
//The classes come to answer the question of what is the most effective way to create objects on demand?

function Student(id, name, subjects) { //By convention with a capital letter
  this.id = id;
  this.name = name;
  this.subjects = subjects;  
}

function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;  
}

console.log(new Student(1, 'Reed'));


//Share all methods --> functions are a special kind of Objects

/**
 * 
 * once the constructor has been updated with this new function, immediately:
 * All objects that we believe will have access to this new method.
 */



Student.prototype.addSubject = function(subject) {
  this.subjects = [...this.subjects, subject];   
}

const student1 = new Student(1, 'Reed');

student1.addSubject('Math');
console.log(student1.subjects);

//more students
const student1 = new Student(1, 'Reed');
const student2 = new Student(2, 'Doug');

student1.addSubject('Math');
student2.addSubject('Physics');
console.log(student2.subjects);


/**
 * JavaScript is a prototype based language, so, whenever we create a function using JavaScript, 
 * JavaScript engine adds a prototype property inside a function, 
 * Prototype property is basically an object (also known as Prototype object), 
 * where we can attach methods and properties in a prototype object, 
 * which enables all the other objects to inherit these methods and properties.
 */

function Person(name, job, yearOfBirth){    
  this.name = name; 
  this.job = job; 
  this.yearOfBirth = yearOfBirth; 
}

console.log(Person.prototype); 

// you can see Person has a prototype property and that prototype property 
//has a constructor object which again points to the Person constructor function.

/**
 * When we create an object using the above function constructor, JavaScript Engine will add under proto
 * or __proto__ in the object which will point to the prototype’s constructor object.
 */


// it's actually because of something called prototypal inheritance


/**
 * When we created the Person constructor function, it wasn't the only object we created. 
 * Automatically, we also created another object, called the prototype! 
 * By default, this object contains a constructor property, 
 * which is simply a reference to the original constructor function, Person in this case.
 * 
 * The prototype property on the Person constructor function is non-enumerable, 
 * meaning that it doesn't show up when we try to access the objects properties. But it's still there!
 */

console.log(Person.prototype); 
console.log(new Person('Steph', 'Engineer', 1994)); 

//it looks exactly like the Person.prototype object! Well guess what, __proto__ is a reference to the Person.prototype object. 
//This is what prototypal inheritance is all about: each instance of the constructor has access to the prototype of the constructor! 