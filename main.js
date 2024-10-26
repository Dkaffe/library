const myLibrary = [];

class Book {
  constructor(author, title, description, pages, read) {
    this.author = author;
    this.title = title;
    this.description = description;
    this.pages = pages;
    this.read = read;
  }
}

// Prototype method for toggling the read status
Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

const description = "This is just a placeholder description of a sample book to display nicely on my page!";

const skillBook = new Book("Johnny Skill", "Skill is what it takes!", description, 222, false);
const funBook = new Book("Tessa Fun", "Having Fun", description, 125, false);
const cookBook = new Book("Robbie Cook", "Cooking it! 2", description, 12, false);

myLibrary.push(skillBook), myLibrary.push(funBook), myLibrary.push(cookBook);

const main = document.querySelector("main");

function addBooks() {
  myLibrary.forEach((book, index) => {
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

    // Button to delete the book
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Remove";
    deleteButton.setAttribute("data-index", index);

    // Option to delete books from the library
    deleteButton.addEventListener("click", (e) => {
      const bookIndex = e.target.getAttribute("data-index");
      myLibrary.splice(bookIndex, 1);
      main.innerHTML = "";
      addBooks();
    });

    // Button to toggle read status of the book
    const readButton = document.createElement("button");
    readButton.innerText = book.read ? "Unread" : "Read";
    readButton.setAttribute("data-index", index);

    // Option to toggle reading status
    readButton.addEventListener("click", (e) => {
      const bookIndex = e.target.getAttribute("data-index");
      myLibrary[bookIndex].toggleReadStatus();
      main.innerHTML = "";
      addBooks();
    });

    // Append all elements to the bookCard
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(description);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(deleteButton);
    bookCard.appendChild(readButton);

    // Append everything to the main container
    main.appendChild(bookCard);
  });
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
  bookForm.reset();
});

const closeButton = document.querySelector(".close-menu");
closeButton.addEventListener("click", () => {
  newBookForm.classList.toggle("hidden");
  newBookButton.innerText === "NEW BOOK"
    ? (newBookButton.innerText = "CLOSE MENU")
    : (newBookButton.innerText = "NEW BOOK");
});
