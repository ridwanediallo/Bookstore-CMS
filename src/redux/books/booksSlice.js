import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api_Id = '1ixeASo4AU3X3cZnoiCd';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${api_Id}/books`;

const initialState = {
  books: [],
  addBookStatus: '',
  addBookError: '',
  getBookStatus: '',
  getBookError: '',
  deleteBookStatus: '',
  deleteBookError: '',
};

export const booksAdd = createAsyncThunk(
  'books/booksAdd',
  async (book, { rejectWithValue }) => {
    try {
      const response = await axios.post(baseUrl + 'books', book);
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
      [booksAdd.pending]: (state, action) => {
          return {
            ...state,
            addBookStatus: 'pending',
            addBookError: '',
            getBookStatus: '',
            getBookError: '',
            deleteBookStatus: '',
            deleteBookError: '',
          };
      },
      [booksAdd.fulfilled]: (state, action) => {
        //   state.books.push(action.payload)// immer
          return {
            ...state,
            books: [action.payload, ...state.books],
            addBookStatus: 'success',
            addBookError: '',
            getBookStatus: '',
            getBookError: '',
            deleteBookStatus: '',
            deleteBookError: '',
          };
      },
      [booksAdd.fulfilled]: (state, action) => {
        //   state.books.push(action.payload)// immer
          return {
            ...state,
            addBookStatus: 'rejected',
            addBookError: action.payload,
            getBookStatus: '',
            getBookError: '',
            deleteBookStatus: '',
            deleteBookError: '',
          };
      }
  },
});

export default booksSlice.reducer;
