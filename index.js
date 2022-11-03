import submitForm from './modules/bookForm.js';
import BooksCollection from './modules/booksCollection.js';
import setDateTime from './modules/dateTime.js';
import bindNavigation from './modules/navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  BooksCollection.renderBooks(); // render books list
  setDateTime(); // set date-time under the navigation
  Array.from(document.querySelectorAll('nav a')).forEach(bindNavigation); // set up naviagtion items
  document.querySelector('#add-book-form').addEventListener('submit', submitForm); // submit add book form
});
