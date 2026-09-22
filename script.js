const myLibrary = [];

function Book(id, title, author, pages, status) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function createAndAddBook(title, author, pages, status) {
  const id = crypto.randomUUID();

  const newBook = new Book(id, title, author, pages, status);

  myLibrary.push(newBook);
  console.log(myLibrary);
}
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;

  //
  //bookstatus
  //

  const statusCheckbox = document.querySelector("#status");
  const isFinished = statusCheckbox.checked;
  const status = isFinished ? "Finished" : "Not finished yet";

  createAndAddBook(title, author, pages, status);
  displayBooks();
});

// ------------------
// Display Logic
// ------------------

const libraryDisplay = document.querySelector("#library-display");
function displayBooks() {
  libraryDisplay.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.dataset.index = index;

    //Create and fill elements for the card:
    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `By: ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `${book.pages} pages`;

    const status = document.createElement("p");
    status.textContent = book.status;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);

    libraryDisplay.appendChild(card);
  });
}
