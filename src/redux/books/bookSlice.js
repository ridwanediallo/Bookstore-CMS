import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooksData = createAsyncThunk('books/getBooksData', async () => {
  const api_Id = '1ixeASo4AU3X3cZnoiCd';
  const response = await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${api_Id}/books`
  );

  if (response.ok) {
    const books = await response.json();
    return { books };
  }
});

export const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    bookAdded: (state, action) => {
      const book = {
        item_id: itemId,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category
      };
      state.push(book);
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getBooksData.fulfilled]: (state, action) => {
      return action.payload.books;
    },
  },
});


// export const selectBooks = (state) => state.books;
export const { bookAdded, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
