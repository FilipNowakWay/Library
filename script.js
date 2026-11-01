// Book constructor
function Book(title, author, pages, status, id = crypto.randomUUID()) {
    if (!new.target) {
        throw new Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status ? "Finished" : "Not Finished";
    this.id = id;
}

// Library
const myLibrary = [];

// DOM elements
const container = document.querySelector(".container");
const addBookBtn = document.querySelector("#add-book-toggle");
const form = document.querySelector("#add-book-form");

// Display books
function renderLibrary() {
    container.innerHTML = "";

    myLibrary.forEach((book) => {
        const statusClass = book.status === "Finished" ? "finished" : "not-finished";
        const card = document.createElement("div");

        card.classList.add("card");
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <button class="statusBtn ${statusClass}">${book.status}</button>
            <button class="removeBookBtn" data-id="${book.id}">Remove Book</button>
        `;

        container.appendChild(card);
    });
}

// Add a book
function addBookToLibrary(title, author, pages, status) {
    myLibrary.push(new Book(title, author, pages, status));
    renderLibrary();
}

// Remove a book
function removeBook(id) {
    const index = myLibrary.findIndex((book) => book.id === id);

    if (index === -1) return;

    myLibrary.splice(index, 1);
    renderLibrary();
}

// Add-book form
addBookBtn.addEventListener("click", () => {
    const isHidden = form.classList.toggle("hidden");
    addBookBtn.setAttribute("aria-expanded", String(!isHidden));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);

    addBookToLibrary(
        data.get("title"),
        data.get("author"),
        Number(data.get("pages")),
        data.has("status")
    );

    form.reset();
});

// Book cards (event delegation)
container.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".removeBookBtn");

    if (!removeButton) return;

    removeBook(removeButton.dataset.id);
});

// Initial books
addBookToLibrary("Hello!aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "Filip", 213, true);
addBookToLibrary("Goodbye!", "Filip", 313, true);
addBookToLibrary("Seeya!", "Filip", 413, false);
