// prototypical inheritance - each instantiated object (from constructor function) inherits from prototype
// every object has prototype

console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf({}).constructor);

function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

const student1 = new Student(1, 'Reed');

console.log(Object.getPrototypeOf(student1).constructor);

// console.log(Object.getPrototypeOf(student1).constructor);
console.log(student1.__proto__ === Student.prototype);
console.log(student1.__proto__.__proto__ === Object.prototype);
