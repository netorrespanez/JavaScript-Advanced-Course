// API - Application Programming Interface: software to communicate with other software
// API - helpful service
// REST API

// CRUD 
// create POST
// read GET
// update PUT / PATCH
// delete DELETE

// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)
// jsonplaceholder.typicode.com

// GET /posts/1 - single blog post
console.log(fetch('https://jsonplaceholder.typicode.com/posts/1'));

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => console.log(response))

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(     response => response.json()         )
  .then(data => console.log(data))

// POST /posts
const blogPost = {
  title: "Cool post",
  body: "lkajsdflkjasjlfda",
  userId: 1  
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "POST",
  headers: {
     "Content-Type": "application/json" 
  },
  body: JSON.stringify(blogPost)
})
  .then(response => response.json())
  .then(data => console.log(data))


// Error

fetch('https://jsonplaceholder.typicode.com/pots/1')
  .then(response => response.json())
  .then(data => console.log(data))


// If we throw an error immediately we go to the catch section
fetch('https://jsonplaceholder.typicode.com/pots/1')
  .then(response => {
      if (!response.ok) {
        throw new Error('Oops!');  
      }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))

// Checking the status code

fetch('https://jsonplaceholder.typicode.com/pots/1')
  .then(response => {
      if (!response.ok) {
        throw new Error(response.status);  
      }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))

  // https://github.com/public-apis/public-apis