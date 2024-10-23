const myLibrary = [];

function Book(author, title, description, pages, read) {
  this.author = author;
  this.title = title;
  this.description = description;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // myLibrary.push(prompt("Add a book:"));
}

const description = "This is just a placeholder description of a sample book to display nicely on my page!";

const skillBook = new Book("Johnny Skill", "Skill is what it takes!", description, 222, false);
const funBook = new Book("Tessa Fun", "Having Fun", description, 125, false);
const cookBook = new Book("Robbie Cook", "Cooking it! 2", description, 12, false);

myLibrary.push(skillBook), myLibrary.push(funBook), myLibrary.push(cookBook);

const main = document.querySelector("main");

function addBooks() {
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

    // Add a short description
    const description = document.createElement("p");
    description.innerText = `"${book.description}"`;

    // Create page display element
    const pages = document.createElement("p");
    pages.innerText = `Total pages: ${book.pages}`;

    // Element for reading status
    const read = document.createElement("p");
    read.innerText = book.read ? "You've already read this book!" : "You haven't read this book yet";

    // Append all elements to the bookCard
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(description);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);

    // Append everything to the main container
    main.appendChild(bookCard);
  }
}

addBooks();

// Button to toggle the form to create a new book
const newBookButton = document.querySelector(".add-book-button");
const newBookForm = document.querySelector(".new-book-menu");
newBookButton.addEventListener("click", () => {
  newBookForm.classList.toggle("hidden");
  newBookButton.innerText === "NEW BOOK"
    ? (newBookButton.innerText = "CLOSE MENU")
    : (newBookButton.innerText = "NEW BOOK");
});

const addBookButton = document.querySelector(".add-book");
const bookForm = document.querySelector("form");
addBookButton.addEventListener("click", (e) => {
  e.preventDefault;

  // Use FormData to get access to the form fields
  const formData = new FormData(bookForm);

  // Extract values
  const title = formData.get("title");
  const author = formData.get("author");
  const description = formData.get("description");
  const pages = formData.get("pages");
  const read = formData.get("read") === "true";

  // Create the new book
  const newBook = new Book(title, author, description, pages, read);

  // Add book to the library
  myLibrary.push(newBook);

  // Reset current book cards and render all new books
  main.innerHTML = "";
  addBooks();
});
