import { combineReducers } from 'redux';

import Query from './reducer_search';
import Venues from './reducer_venues';

const rootReducer = combineReducers({
  query: Query,
  venues: Venues
});

export default rootReducer;