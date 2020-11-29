// const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
//   .then(response => response.json())
//   .then(data => console.log(data));

// async function getBlogPost() {}
const getBlogPost = async () => {}

// 
async function getBlogPost() {}
getBlogPost().then(() => console.log('works as a promise'));

//
async function getBlogPost() {
  return 'works here too!';  
}

getBlogPost().then(value => console.log(value));