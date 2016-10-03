import { actions } from '../actions/index';

const initialState = {
  city: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case actions.SAVE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });
    default:
      return state;
  }
}