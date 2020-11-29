//AJAX

const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}

//jQuery methods

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

//fetch

fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  const names = people.map(person => person.name).join("\n");
  console.log(names);
});