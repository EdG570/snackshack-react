const initialState = {
  food: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SAVE_FOOD':
      return action.payload;
    default:
      return state;
  }
}