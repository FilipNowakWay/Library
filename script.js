// Book constructor
function Book(title, author, pages, status, unique_id) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status ? 'Finished' : 'Not Finished';
  this.unique_id = unique_id;
  this.info = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages}, Status: ${this.status}`);
  }
}

// Add books
const myLibrary = [];
function addBookToLibrary(title, author, pages, status, unique_id = crypto.randomUUID()) {
  // take params, create a book then store it in the array
  let new_book = new Book(title, author, pages, status, unique_id);
  myLibrary.push(new_book);
}

// Display Books
function display_myLibrary(myLibrary) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.innerHTML = `<h3>${book.title}</h3><p>Author: ${book.author}</p><p>Pages: ${book.pages}</p><h4>Status: ${book.status}</h4>`;
    card.classList.add("card");
    container.appendChild(card);
  });
}

addBookToLibrary("Hello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "Filip", 213, true);
addBookToLibrary("Goodbye!", "Filip", 313, true);
addBookToLibrary("Seeya!", "Filip", 413, false);

display_myLibrary(myLibrary);
