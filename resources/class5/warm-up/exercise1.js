/** 
 * In a synchronous programming model, things happen one at a time. 
 * When you call a function that performs a long-running action, 
 * it returns only when the action has finished  and it can return the result. 
 * This stops your program for the time the action takes.
 * An asynchronous model allows multiple things to happen at the same time.
 */

navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
});
console.log('done');

// setTimeout()
// addEventListener()

/**
 * The biggest hurdle people have when trying to understand callbacks 
 * is understanding the order that things execute as a program runs. In this example three major things happen. 
 * First the handlePhoto function is declared, then the downloadPhoto function is invoked 
 * and passed the handlePhoto as its callback, 
 * and finally 'Download started' is printed out.
 */
downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)

function handlePhoto (error, photo) {
  if (error) console.error('Download error!', error)
  else console.log('Download finished', photo)
}

console.log('Download started')
/**
 * Callbacks 
 * 
 * One approach to asynchronous programming is to make functions that perform a slow action take an extra argument, a callback function. 
 * The action is started, and when it finishes, the callback function is called with the result.
 * As an example, the setTimeout function, waits a given number of milliseconds (a second is a thousand mil- liseconds) and then calls a function.
 */

/**
 * Callback hell example
 * The cause of callback hell is when people try to write JavaScript
 * in a way where execution happens visually from top to bottom.
 */

navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
    getRestaurants(position, restaurants => {
        console.log(restaurants);
        console.log('done');
    })
});

//
fs.readdir(source, function (err, files) {
    if (err) {
      console.log('Error finding files: ' + err)
    } else {
      files.forEach(function (filename, fileIndex) {
        console.log(filename)
        gm(source + filename).size(function (err, values) {
          if (err) {
            console.log('Error identifying file size: ' + err)
          } else {
            console.log(filename + ' : ' + values)
            aspect = (values.width / values.height)
            widths.forEach(function (width, widthIndex) {
              height = Math.round(width / aspect)
              console.log('resizing ' + filename + 'to ' + height + 'x' + height)
              this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
                if (err) console.log('Error writing file: ' + err)
              })
            }.bind(this))
          }
        })
      })
    }
  })


// callbacks -> promises

// States of a promise:

// pending
// fulfilled 2xx
// rejected  4xx


/**
 * Pending: This is the initial state of the Promise before an operation begins
 * Fulfilled: This means the specified operation was completed
 * Rejected: The operation did not complete; an error value is usually thrown
 */


new Promise()

new Promise(() => {});
// resolve, reject they are functions (cb)

new Promise((resolve, reject) => {});


const promise = new Promise( function(resolve, reject) {
  setTimeout(() => resolve('done'), 1000);  
});




promise.then(() => {

       })
       .catch((x) => {
  
       });

// First Example
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);  
});

promise.then(() => console.log('success'))
       .catch(() => console.log('failure'));

  
promise.then(value => console.log(value))
       .catch(() => console.log('failure'));




const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(), 1000);  
});

promise.then(value => console.log(value))
       .catch(() => console.log('failure'));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise failed.')), 1000);  
});

promise.then(value => console.log(value)).catch(error => console.error(error));

//

const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise failed.')), 1000);  
});

promise
  .then(value => console.log(value))
  .catch(error => console.error(error))
  .finally(() => console.log('done'));


// Complete example 
const promise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(position => {
   resolve(position); 
 }, error => {
    reject(error);
 }); 
});

promise
 .then(position => console.log(position))
 .catch(error => console.error(error))
 .finally(() => console.log('done'));
