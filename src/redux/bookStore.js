import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import apiReducer from './books/apiSlice';
import categoriesReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
    api: apiReducer,
  },
});
