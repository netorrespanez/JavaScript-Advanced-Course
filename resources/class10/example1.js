/**
 *  real power of async functions can be seen when using the await keyword!
 *  With the await keyword, we can suspend the asynchronous function while we wait 
 *  for the awaited value return a resolved promise.
 */

/**
 * When encountering an await keyword, the async function gets suspended. 
 * The execution of the function body gets paused, and the rest of the async 
 * function gets run in a microtask instead of a regular task!
 */

const one = () => Promise.resolve('One')


async function myFunc() {
  console.log('In function')
  const res = await one()
  console.log(res)
}


console.log('Before function!');
myFunc();
console.log('After function!');

//
const getTodos =  async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  if(response.status !== 200){
    throw new Error('cannot fetch the data');
  }

  const data = await response.json();
  console.log(data);
  return data;
}; 



/**
 * no comments at all
 */

const getTodos =  async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  
  return data
}; 


//const test = getTodos();
//console.log(test); 


console.log(1)
console.log(2)
getTodos()
  .then(data => console.log('resolved', data))
  .catch(err => console.log('rejected', err.message));
console.log(3)
console.log(4)

// promises example - comparation 
fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  console.log('resolved', response);
  return response.json();
}).then(data => {
  console.log(data);
}).catch((err) => {
  console.log('rejected', err)
})