import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './bookSlice'

export default configureStore({
    reducer: {
        book: bookReducer,
    }
})
