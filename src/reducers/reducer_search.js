import { actions } from '../actions/index';

const initialState = {
  city: '',
  food: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case actions.SAVE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });
    case actions.SAVE_FOOD:
      return Object.assign({}, state, {
        food: action.payload
      });
    default:
      return state;
  }
}