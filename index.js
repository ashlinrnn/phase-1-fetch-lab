function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
 return fetch("https://anapioficeandfire.com/api/books")
.then((res) => res.json()) 
.then(data => { 
  renderBooks(data); 
  return data;
})
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
}); 

fetch("https://anapioficeandfire.com/api/booksLinks to an external site.")
.then((res) => res.json()) 
.then((json) => console.log(json))