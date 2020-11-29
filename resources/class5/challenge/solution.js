fetch("https://jsonplaceholder.typicode.com/users/3")
.then(response => {
   return response.json();
})
.then(person => {
    console.log(`${person.name} works for ${person.company.name}`);
});


// Catch Errors

fetch("https://jsonplaceholder.typicode.com/uers/3")
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})
.then(person => {
    console.log(`${person.name} works for ${person.company.name}`);
})
.catch(err => console.log(err));
