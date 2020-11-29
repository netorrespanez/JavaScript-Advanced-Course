//Promise.all(iterable)
//.allSettled(iterable)
//.race(iterable)

const weather = true
const date    = new Promise(function(resolve, reject) {
  if (weather) {
    const dateDetails = {
      name:     'Cubana Restaurant',
      location: '55th Street',
      table:    5
    };

    resolve(dateDetails)
  } else {
    reject(new Error('Bad weather, so no Date'))
  }
});


const myDate = function() {
  date
    .then(function(done) {
      console.log('We are going on a date!')
      console.log(done)
    })
    .catch(function(error) {
        console.log(error.message)
    })
}

myDate();


const orderUber = function(dateDetails) {
  return new Promise(function(resolve, reject) {
    const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`;

    resolve(message)
  });
}

//This promise can be shortened to:
const orderUber = function(dateDetails) {
  const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`;
  return Promise.resolve(message)
} 


//We chain this promise to our earlier date operation like so:

const myDate = function() {
  date
    .then(orderUber)
    .then(function(done) {
      console.log(done);
    })
    .catch(function(error) {
      console.log(error.message)
    })
}

myDate();


//Get me an Uber ASAP to 55th Street, we are going on a date!


/**
 * Async and Await
 * 
 * An async function is a modification to the syntax used in writing promises. 
 * You can call it syntactic sugar over promises. It only makes writing promises easier.
 * An async function returns a promise -- if the function returns a value, 
 * the promise will be resolved with the value, but if the async function throws an error, 
 * the promise is rejected with that value. Let’s see an async function:
 */


// Also when a promise is rejected, an async function is represented like this:
async function yourRide() {
  return '2017 Dodge Charger';
}

function yourRide() {
  return Promise.resolve('2017 Dodge Charger');
}


function foo() {
  return Promise.reject(25)
}

// is equal to
async function foo() {
  throw 25;
}

/**
 * Await
 * 
 * Await is only used with an async function. The await keyword is used in an async function 
 * to ensure that all promises returned in the async function are synchronized, ie. they wait for each other. 
 * Await eliminates the use of callbacks in .then() and .catch(). 
 * In using async and await, async is prepended when returning a promise, 
 * await is prepended when calling a promise. try and catch are also used to get the rejection value of an async function. 
 * Let's see this with our date example:
 */


async function myDate() {
  try {

    let dateDetails = await date;
    let message     = await orderUber(dateDetails);
    console.log(message);

  } catch(error) {
    console.log(error.message);
  }
}

(async () => { 
  await myDate();
})();


//ES6

setTimeout(function() {
  console.log('Cool!')
}, 1000);


let lunchTimeDelay1000 = new Promise(function(eat, skip) {
  setTimeout(eat, 1000);
}).then(function() {
  console.log('Lunch Time!');
});

//with ES6 arrow functions:
let lunchTimeDelay1000 = new Promise((eat, skip) => setTimeout(eat, 1000))
                                .then(() => console.log('Lunch Time!'));

//
var lunchTimeDelay1000 = () => new Promise((eat, skip) => { setTimeout(eat, 1000) })

lunchTimeDelay1000()
  .then(function() {
    console.log('Lunch Time!');
    return lunchTimeDelay1000();
  })
  .then(function() {
    console.log('Good Food!');
  });