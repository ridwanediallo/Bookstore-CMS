import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBook = createAsyncThunk('book/getBook', async ({ id }) => {
  return fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`
  ).then((res) => res.json());
});

const apiSlice = createSlice({
    name: 'book',
    initialState: {
        books: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [getBook.pending]: (state, action) => {
            state.loading = true;
        },
        [getBook.fulfilled]: (state, action) => {
            state.loading = false;
            state.books = [action.payload]
        },
    }
})
