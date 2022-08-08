export default class myStorage {
  static getData() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addition(book) {
    const books = myStorage.getData();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static remove(id) {
    const books = myStorage.getData();
    books.forEach((book, index) => {
      if (book.id === id) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}