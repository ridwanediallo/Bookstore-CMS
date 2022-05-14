import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const id = '1ixeASo4AU3X3cZnoiCd';

export const getBook = createAsyncThunk('book/getBook', async () => {
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
        [getBook.rejected]: (state, action) => {
            state.loading = false;
            state.books = action.payload;
        },
    }
})

export default apiSlice.reducer;
