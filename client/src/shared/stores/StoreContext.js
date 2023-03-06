import { createContext } from 'react';
import Books from './Books';

export const booksStore = new Books();
export const StoreContext = createContext(booksStore);
