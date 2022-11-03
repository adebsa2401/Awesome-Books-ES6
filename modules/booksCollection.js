import getBookCard from './book-card.js';
import Book from './book.js';

export default class BooksCollection {
  static getBooks = () => {
    let books = localStorage.getItem('books');
    books = books ? JSON.parse(books) : [];

    return books;
  }

  static saveBooks = (books) => {
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook = (book) => {
    let books = this.getBooks();

    if (books.map((item) => item.id).includes(book.id)) {
      books = books.filter((item) => item.id !== book.id);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static renderBooks = () => {
    this.getBooks().forEach((book) => {
      const bookCard = getBookCard(book, this.removeBook);
      document.getElementById('books-list').append(bookCard);
    });
  }

  static addBook = (title, author) => {
    const books = this.getBooks();
    const latestId = Math.max(...[0, ...books.map((book) => book.id)]);
    books.push(new Book(
      latestId + 1,
      title,
      author,
    ));
    this.saveBooks(books);
    const bookCard = getBookCard(books.reverse()[0], this.removeBook);
    document.getElementById('books-list').append(bookCard);
  }
}
