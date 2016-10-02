const initialState = {
  city: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SAVE_CITY':
      return action.payload;
    default:
      return state;
  }
}