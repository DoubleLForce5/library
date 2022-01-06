let addBtn = document.getElementById('add-book-btn');

let myLibrary = [];

function Book() {
  // the constructor 
}

// add a function to take user’s input and store the myLibrary array

function addBookToLibrary() {
  // grab values from inputs 
  // let titleInput = document.getElementById('title-input').value;
  // let authorInput = document.getElementById('author-input').value;
 
  myLibrary.push(document.getElementById('title-input').value)
}

console.log(myLibrary)


addBtn.addEventListener('click', addBookToLibrary)