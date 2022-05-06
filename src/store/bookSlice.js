import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: 'book',
  initialState: [
    {
      id: 1,
      title: 'go',
      author: 'out',
    },
    {
      id: 2,
      title: 'go',
      author: 'out',
    },
    {
      id: 3,
      title: 'go',
      author: 'out',
    },
  ],
  reducers: {
    addBook: (state, action) => {
        state.title = action.payload,
        state.author = action.payload
    }
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
