import { makeAutoObservable } from 'mobx';

class Books {
  books = [];

  constructor() {
    makeAutoObservable(this);
  }

  setBooks(books) {
    this.books = books;
  }
}

export default Books;
