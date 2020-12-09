/*

this: reference to an object

4 Rules to 'this'. How is it called?

1) in the global context
2) as a method on an object
3) as a constructor function or class constructor
4) as a DOM event handler

*/


//CASE 1
console.log(this);

function whatIsThis() {
  console.log(this);
  this.something = 2;
  console.log(something);
}

whatIsThis();

//CASE 2

const user = {
  first: 'Reed',
  last: 'Barger',
  greetUser() {
    console.log(`Hi, ${this.first} ${this.last}`);  
  }  
}

user.greetUser()


const userInfo = {
  title: "Programmer",
  user: {
    first: 'Reed',
    last: 'Barger',
    greetUser() {
      console.log(`Hi, ${this.first} ${this.last}`);  
    }   
  }  
}

userInfo.user.greetUser()

// title?
const userInfo = {
  title: "Programmer",
  user: {
    first: 'Reed',
    last: 'Barger',
    greetUser() {
      console.log(`Hi, ${this.first} ${this.last} ${this.title}`);  
    }   
  }  
}

userInfo.user.greetUser()

//CASE 3

class User {
  constructor(first, age) {
    this.first = first;
    this.age = age;  
  }  
  
  getAge() {
    console.log(`${this.first}'s age is ${this.age}`);  
  }
}

const user = new User('Bob', 24);
user.getAge();

// With constructors
function User(first, age) {
  this.first = first;
  this.age = age;
}

User.prototype.getAge = function() {
  console.log(`${this.first}'s age is ${this.age}`);  
}

const user2 = new User('jane', 25);
user2.getAge();

//CASE 4

const button = document.createElement('button');
button.textContent = "Click";
document.body.appendChild(button);

button.addEventListener('click', function() {
  console.log(this); //button
})