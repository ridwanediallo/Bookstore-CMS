import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {books: []},
  reducers: {
    bookAdded: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      // const {index} = action.payload;
      state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const selectBooks = (state) => state.books.books;
export const { bookAdded, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
