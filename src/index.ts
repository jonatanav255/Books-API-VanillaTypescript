interface Book {
  title: string
  author: string
  year: number
}
const books: Book[] = []

const booksListElement = document.getElementById('booksList') as HTMLElement
const addBookForm = document.getElementById('addBookForm') as HTMLFormElement
const apiUrl = 'http://localhost:8080/books'

const fetchBooks = async (): Promise<void> => {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Error fetching books:', error)
  }
}

console.log(fetchBooks())

