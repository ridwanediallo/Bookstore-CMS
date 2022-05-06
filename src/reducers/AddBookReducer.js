const initialState = [
  {
    id: 1,
    title: 'go',
    author: 'out',
  },
  {
    id: 2,
    title: 'go',
    author: 'out',
  },
  {
    id: 3,
    title: 'go',
    author: 'out',
  },
];

export const addBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
           state = [...state, action.payload];
           return state;

        case 'REMOVE_BOOK':
            const bookFilter = state.filter(book => book.id === action.payload ? null : book);
            state = bookFilter;
            return state;
    }
}
