import { makeAutoObservable } from 'mobx';

class Books {
  bookCount = 0;
  books = [];

  constructor() {
    makeAutoObservable(this);
  }

  setBookCount(bookCount) {
    this.bookCount = bookCount;
  }

  setBooks(books) {
    this.books = [...this.books, ...books];
  }
}

export default Books;
