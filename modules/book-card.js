export default (book, bookRemover) => {
  const node = document.createElement('div');

  node.innerHTML = `
      <div id="book-card-${book.id}" class="book-card">
        <p class="book-title-author">"${book.title}" by ${book.author}</p>
        <button id="remove-book-${book.id}" class="remove-button" type="button">Remove</button>
      </div>
      `.trim();

  if (document.getElementsByClassName('book-card').length % 2 === 0) {
    node.firstChild.classList.add('even-index');
  }

  node.firstChild
    .querySelector(`#remove-book-${book.id}`)
    .addEventListener('click', () => {
      bookRemover(book);
      const card = document.getElementById(`book-card-${book.id}`);
      if (card) {
        card.remove();
        Array.from(document.getElementsByClassName('book-card')).forEach((card, index) => {
          if (index % 2 === 0) {
            card.classList.add('even-index');
          } else {
            card.classList.remove('even-index');
          }
        });
      }
    });

  return node.firstChild;
};
