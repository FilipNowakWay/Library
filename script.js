function Book(title,author,pages,status) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info() = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages}, Status: ${this.status ? 'Finished' : 'Not Finished'}`);
  }
}

