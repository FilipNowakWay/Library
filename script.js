const myLibrary = [];

function Book(id, title, author, pages, year) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function createAndAddBook(title, author, pages) {
  const id = crypto.randomUUID();

  const newBook = new Book(id, title, author, pages);

  myLibrary.push(newBook);
  console.log(myLibrary);
}
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");

  createAndAddBook(title, author, pages);
});