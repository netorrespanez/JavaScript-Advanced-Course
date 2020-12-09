/**
 * Async/await 
 * 
 * wrapping promises in a better sintax
 */

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data));

// async function getBlogPost() {}
//const getBlogPost = () => {}

async function getBlogPost() {
  return 'works here too!';  
}

getBlogPost().then(value => console.log(value));

// promise model
function getBlogPost() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('blog post'), 1000);
  });
  
  promise
    .then(value => console.log(value))
    .finally(() => console.log('done'));
}

getBlogPost()

//async/await model
async function getBlogPost() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('blog post'), 1000);
  });
  
  const result = await promise;
  console.log(result);
  console.log('done');
    // .then(value => console.log(value))
    // .finally(() => console.log('done'));
}

getBlogPost()



//getPost solution with async/await

async function getBlogPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await response.json();
  return data
}

getBlogPost()
  .then(data => console.log(data));

//Catch Errors
async function runAsync() {
  try { 
    await Promise.reject(Error('Oops'));  
  } catch (error) {
    console.error(error); 
  }  
}

runAsync();

//
async function runAsync() {
  try { 
    await Promise.resolve('hello world'); 
    null.someProperty = true; 
  } catch (error) {
    console.error(error); 
  }  
}

runAsync();


//
async function runAsync() {
  return await Promise.reject(Error('Oops')); 
}

runAsync().catch(error => console.error(error));

//
async function getGithubUser() {
  try {    
    const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk');
    if (!response.ok) {
      throw new Error(response.status);  
    }
  } catch (error) {
    console.error(error);  
  } 
}
getGithubUser();