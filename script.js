function Book(title,author,pages,status,unique_id) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.unique_id = unique_id;
  this.info() = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages}, Status: ${this.status ? 'Finished' : 'Not Finished'}`);
  }
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, status, unique_id = crypto.randomUUID()) {
  // take params, create a book then store it in the array
  let new_book = new Book(title, author, pages, status, unique_id);
  myLibrary.push(new_book);
}

addBookToLibrary("Hello!", "Filip", 213, true);
addBookToLibrary("Goodbye!", "Filip", 313, true);
addBookToLibrary("Seeya!", "Filip", 413, false);

