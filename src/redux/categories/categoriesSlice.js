import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { showText: false },
  reducers: {
    toggleText(state) {
      state.showText = !state.showText;
    },
  },
});

export const selectTect = (state) => state.categories;
export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;
