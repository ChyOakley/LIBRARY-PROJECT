# LIBRARY-PROJECT
This project has been built in line with the following:
1. Create an array that store all your books. Then write a function that can take some arguments,
create a book from those arguments, and store the new book object into an array. Your code
should look something like this:
const library = [];
function Book() {
// what the function should do
}
function addBook() {
// What the function will do
}
2. Write a function that loops through the array and displays each book on the page. You can
display them in some sort of table, or each on their own “card”. It might help for now to
manually add a few books to your array so you can see the display.
1. To achieve this consider the logic for displaying books to the user and the book
structures that hold all information as distinct entities. This separation will enhance the
maintainability and scalability of your code.
3. Add a “New Book” button that brings up a form allowing users to input the details for the new
book and add it to the library: author, title, number of pages, whether it’s been read and
anything else you might want. How you decide to display this form is up to you. Note: you will
most likely encounter an issue where submitting your form will not do what you expect it to do.
That’s because the submit input tries to send the data to a server by default. This is
where event.preventDefault(); will come in handy. Read up documentation on this.
4. Add a button on each book’s display to remove the book from the library.
1. You will need to associate your DOM elements with the actual book objects in some
way. One easy solution is giving them a data-attribute that corresponds to the index of
the library array.; do research on data-attribute.
5. Add a button on each book’s display to change its read status.