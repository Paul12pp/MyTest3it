const initialState = {
  empty: 0,
};
const emptyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'empty':
      return action.payload;
    default:
      return state;
  }
};

export default emptyReducer;
