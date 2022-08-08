import myStorage from './myStorage.js';

export default class displayBox {
  static displayBooks() {
    const books = myStorage.getData();
    const myBooks = books;
    myBooks.forEach((book) => {
      displayBox.addBookToList(book);
    });
  }

  static addBookToList(book) {
    const getAppended = document.getElementById('book-container');
    const beAppended = document.createElement('div');
    beAppended.className = 'kitab';
    beAppended.innerHTML = `
           <h4>${book.title}</h4> <span class = 'creator'>${book.author}</span>
           <p class="identity-book">${book.id}</p>
           <button class = 'delete'>Delete</button>
           `;
    getAppended.appendChild(beAppended);
  }

  static clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}