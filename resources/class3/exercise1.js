/**
 * Default parameters values
 */

 // Define a function to cube a number
function cube(x) {
    return x * x * x
}

// Invoke cube function
cube(10)
cube()

// Check for undefined manually
function cube(x) {
    return  !x ? 5*5*5 : x * x * x;
}

cube()

// Define a cube function with a default value
function cube(x = 5) {
    return x * x * x
}

/**
 * However, one important caveat to note is that the default parameter value
 * will also override an explicit undefined passed as an argument to a function,
 * as demonstrated here:
 */

// Invoke cube function with undefined
cube(undefined)

// Create functions with a default value for each data type
const defaultNumber = (number = 42) => console.log(number)
const defaultString = (string = 'Shark') => console.log(string)
const defaultBoolean = (boolean = true) => console.log(boolean)
const defaultObject = (object = { id: 7 }) => console.log(object)
const defaultArray = (array = [1, 2, 3]) => console.log(array)
const defaultNull = (nullValue = null) => console.log(nullValue)

// Invoke each function
defaultNumber()
defaultString()
defaultBoolean()
defaultObject()
defaultArray()
defaultNull()


/**
 * Note that any object created in a default parameter will be created every time the function is called.
 * One of the common use cases for default parameters is to use this behavior to obtain values out of an object.
 * If you try to destructure or access a value from an object that doesn't exist, it will throw an error.
 * However, if the default parameter is an empty object, it will simply give you undefined values instead of throwing an error:
 */

 // Define a settings function with a default object
function settings(options = {}) {
    const { theme, debug } = options // {}.debug
    //options[theme] -> option.theme -> undefined.theme
    //options[debug] -> option.debug -> undefined.debug

    // Do something with settings
}


//Using Multiple Default Parameters
// Define a function to add two values
function sum(a = 1, b = 2) {
    return a + b
}

sum()

// Define a function to create a user object using parameters
function createUser(firstname, lastname, fullname = { firstname, lastname }) {
  return fullname
}
  // Create user
const user = createUser('Jean-Luc Picard', 'Captain')


  // Define a function with a default parameter at the start of the list
function defaultFirst(a = 1, b) {      //It is usually recommended to put all default parameters at the end of a list of parameters,
    return a + b
}

defaultFirst(undefined, 2)

// Define a function with a default parameter at the end of the list
function defaultLast(a, b = 1) {
    return a + b
}

defaultLast(2)

// Define function to create an element
function createNewElement(tag, text, classNames) {
    const el = document.createElement(tag)
    el.textContent = text
  
    classNames.forEach((className) => { //what happens if classNames is undefined
      el.classList.add(className)
    })
  
    return el
  }

const greeting = createNewElement('p', 'Hello!', ['greeting', 'active'])
//<p class="greeting active">Hello!</p>

//Function Calls as Default Parameters
// Define a function to return a random number from 1 to 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10)
  }
  
  // Use the random number function as a default parameter for the cube function
  function cube(x = getRandomNumber()) {
    return x * x * x
  }

// Invoke cube function twice for two potentially different results
cube()
cube()


// Define a function with a default parameter that is an anonymous function
function outer(
    parameter = function inner() {
      return 100
    }
  ) {
    return parameter()
  }
  
  // Invoke outer function
  outer()