/**
 * When resolve is call the code would execute the function is passed to then method
 */


const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);  
});

promise.then().catch();

//
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);  
});

promise.then(() => console.log('success')).catch(() => console.log('failure'));


//Show an error 
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise failed.')), 1000);  
});

promise.then(value => console.log(value)).catch(error => console.error(error));

// Use of finally
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise failed.')), 1000);  
});

promise
  .then(value => console.log(value))
  .catch(error => console.error(error))
  .finally(() => console.log('done'));


//https://developer.mozilla.org/es/docs/Web/API/Geolocation/getCurrentPosition

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


 //Pass resolve and reject as references to success callback and error callback 
 const promise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve(position), reject(error)); 
});

promise
 .then(position => console.log(position))
 .catch(error => console.error(error))
 .finally(() => console.log('done'));

//

const promise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject); 
});

promise
 .then(position => console.log(position))
 .catch(error => console.error(error))
 .finally(() => console.log('done'));