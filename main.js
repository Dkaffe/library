const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  //   myLibrary.push(prompt("Add a book:"));
}

const skillBook = new Book("Johnny Skill", "Skill is what it takes!", 222, false);
const funBook = new Book("Tessa Fun", "Having Fun", 125, false);
const cookBook = new Book("Robbie Cook", "Cooking it! 2", 12, false);

myLibrary.push(skillBook), myLibrary.push(funBook), myLibrary.push(cookBook);

const main = document.querySelector("main");

for (let book of myLibrary) {
  // Create the container for a card element
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";

  //   Create the title element
  const title = document.createElement("h3");
  title.innerText = book.title;

  // Create the author element
  const author = document.createElement("p");
  author.innerText = `Author: ${book.author}`;

  // Create page display element
  const pages = document.createElement("p");
  pages.innerText = `Total pages: ${book.pages}`;

  // Element for reading status
  const read = document.createElement("p");
  read.innerText = book.read ? "You've already read this book!" : "You haven't read this book yet";

  // Append all elements to the bookCard
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(read);

  // Append everything to the main container
  main.appendChild(bookCard);
}
