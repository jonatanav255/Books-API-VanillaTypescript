// Define the Book interface
interface Book {
  title: string
  author: string
  year: number
}

// API URL (replace with your backend URL)
const apiUrl = 'http://localhost:8080/books' // Modify this URL based on your backend

// Function to fetch all books from the API
export const fetchBooks = async (): Promise<Book[]> => {
  try {
    const response = await fetch(apiUrl)
    const books: Book[] = await response.json()
    return books
  } catch (error) {
    console.error('Error fetching books:', error)
    return []
  }
}

// Function to add a book
export const addBook = async (book: Book): Promise<void> => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })

    if (!response.ok) {
      throw new Error('Failed to add book')
    }

    const newBook = await response.json()
    console.log('Added book:', newBook)
  } catch (error) {
    console.error('Error adding book:', error)
  }
}

// Function to render the list of books into the DOM
export const renderBooks = (books: Book[]): void => {
  const booksListElement = document.getElementById('booksList') as HTMLElement

  if (!booksListElement) return

  booksListElement.innerHTML = '' // Clear existing list

  books.forEach(book => {
    const li = document.createElement('li')
    li.textContent = `${book.title} by ${book.author} (${book.year})`
    booksListElement.appendChild(li)
  })
}
