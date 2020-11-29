fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
    .then(data => console.log(data))
    .catch(() => console.log('Error catch 2'))
  .catch(() => console.log('Error catch 1'))




  fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => response.json())
      .then(json => console.log("Name: "+json.name+". Company: "+json.company.name))
      .catch(() => console.log("Error"))