import './style.css';
import { fetchBooks, addBook, renderBooks } from './books';

// Run when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  const books = await fetchBooks();
  renderBooks(books);
});

// Handle book form submission
const addBookForm = document.getElementById('addBookForm') as HTMLFormElement;

addBookForm?.addEventListener('submit', async (event: Event) => {
  event.preventDefault();

  const titleInput = (document.getElementById('title') as HTMLInputElement).value;
  const authorInput = (document.getElementById('author') as HTMLInputElement).value;
  const yearInput = parseInt((document.getElementById('year') as HTMLInputElement).value);

  const newBook = {
    title: titleInput,
    author: authorInput,
    year: yearInput,
  };

  // Add the new book
  await addBook(newBook);

  // Fetch the updated list of books and re-render
  const updatedBooks = await fetchBooks();
  renderBooks(updatedBooks);

  // Clear form after submission
  addBookForm.reset();
});
