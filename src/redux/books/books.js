const initialState = [
  {
    id: '1', title: 'go', author: 'out',
  },
  {
    id: '2', title: 'go', author: 'out',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bookReducer;
