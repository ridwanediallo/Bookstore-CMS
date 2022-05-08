import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './books/bookSlice'

export default configureStore({
    reducer: {
        books: bookReducer,
    }
})
