import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooksData = createAsyncThunk('books/getBooksData', async () => {
  const api_Id = '1ixeASo4AU3X3cZnoiCd';
  const response = await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${api_Id}/books`
  );

  if (response.ok) {
    const book = await response.json();
    return { book };
  }
});

export const addBooks = createAsyncThunk(
  'books / addBooks',
  async (payload) => {
    const api_Id = '1ixeASo4AU3X3cZnoiCd';
    const book = {};
    book.item_id = payload.id;
    book.title = payload.title;
    book.author = payload.author;
    book.category = payload.category;

    await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${api_Id}/books`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      }
    );

    return book;
  }
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (payload) => {
    const api_Id = '1ixeASo4AU3X3cZnoiCd';
    await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${api_Id}/books/${payload}`,
      {
        method: 'DELETE',
      }
    );
    console.log(payload);

    return payload;
  }
);

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    book: {},
    loading: false,
  },
  extraReducers: {
    [getBooksData.pending]: (state, action) => {
      state.loading = true;
      console.log('fetching');
    },
    [getBooksData.fulfilled]: (state, action) => {
      state.loading = false;
      console.log('success');
      state.book = action.payload.book;
    },
    [addBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.book[action.payload.item_id] = [
        {
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
    },
    [deleteBook.fulfilled]: (state, action) => {
      console.log('success');
      delete state.book[action.payload];
    },
  },
});

export const { bookAdded, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
