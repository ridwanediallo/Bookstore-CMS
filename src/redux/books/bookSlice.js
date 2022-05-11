import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    replaceBook(state, action) {
      state = action.payload
    },
    bookAdded: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});



export const fetchBookData = (books) => {
  return async (dispatch) => {
       const fetchData = async () => {
         const response = await fetch(
           'https://react-http-project-35727-default-rtdb.firebaseio.com/books.json'
         );

         if (!response.ok) {
           throw new Error('Could not fetch Book data');
         }

         const data = await response.json();

         return data;
       };

       try {
         await fetchData();

       } catch (error) {
         console.error(error);
       }
  }

}

export const selectBooks = (state) => state.books;
export const { bookAdded, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
