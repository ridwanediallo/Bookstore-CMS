import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
    // api: apiReducer,
    // booksState: booksSlice,
  },
});
