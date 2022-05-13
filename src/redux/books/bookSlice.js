import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const getBooksData = createAsyncThunk('books/getBooksData', async () => {
  const api_Id = '1ixeASo4AU3X3cZnoiCd';
  const response = await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${api_Id}/books`,
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
    console.log(JSON.stringify(book));
    await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${api_Id}/books`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      },
    );
  },
);

//${payload.id}
export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (payload) => {
    const resp = await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${api_Id}/books/${payload.id}`,
      {
        method: 'DELETE',
      },
    );

    if (resp.ok) {
      return { id: payload.id };
    }
  },
);

export const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    bookAdded: (state, action) => {
      const book = {
        id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.push(book);
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: {
    [getBooksData.pending]: (state, action) => {
      // return action.payload.books;
      console.log('fetching');
    },
    [getBooksData.fulfilled]: (state, action) => {
      console.log('success');
      return action.payload.book;
    },
    [addBooks.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

// export const selectBooks = (state) => state.books;
export const { bookAdded, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
