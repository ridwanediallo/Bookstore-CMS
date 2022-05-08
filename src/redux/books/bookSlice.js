import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectBooks = (state) => state.books;
export const { bookAdded } = bookSlice.actions;
export default bookSlice.reducer;
