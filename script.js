const library = [];

// Here are the Book constructor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// This Function is used to add a new book to the library
function addBookToLibrary(book) {
  library.push(book);
  displayBooks();
}

// The Function here is to display books
function displayBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = ""; 
  // This is to Clear the library display

  library.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read}</p>
      <button class="toggle-btn" data-index="${index}">Toggle Read Status</button>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;

    libraryDiv.appendChild(bookCard);
  });

  addCardListeners();
}

// Here I added event listeners to book buttons
function addCardListeners() {
  const removeButtons = document.querySelectorAll(".remove-btn");
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      library.splice(index, 1);
      displayBooks();
    });
  });

  toggleButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      library[index].read = library[index].read === "Yes" ? "No" : "Yes";
      displayBooks();
    });
  });
}

// Show and hide form
document.getElementById("new-book-btn").addEventListener("click", () => {
  document.getElementById("form-container").classList.remove("hidden");
});

document.getElementById("cancel-btn").addEventListener("click", () => {
  document.getElementById("form-container").classList.add("hidden");
});

// Form submission
document.getElementById("book-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  document.getElementById("book-form").reset();
  document.getElementById("form-container").classList.add("hidden");
});