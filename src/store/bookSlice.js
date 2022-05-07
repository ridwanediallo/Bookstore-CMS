import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: [
    { id: '1', title: 'Go pro', author: 'Ridwan' },
    { id: '2', title: 'Master React', author: 'Ridwan' },
    { id: '3', title: 'Learn Redux', author: 'Ridwan' },
  ],
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectBooks = (state) => state.books;
export const { bookAdded } = bookSlice.actions;
export default bookSlice.reducer;
