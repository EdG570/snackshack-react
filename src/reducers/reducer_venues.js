import { actions } from '../actions/index';

const initialState = {
  venues: [],
  errors: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case actions.FETCH_VENUES_SUCCESS:
      console.log(action.payload);
      return Object.assign({}, state, {
        venues: action.payload.response.groups[0].items
      });
    case actions.FETCH_VENUES_ERROR:
      return Object.assign({}, state, {
        errors: action.payload
      });
    default:
      return state;
  }
}