import { combineReducers } from 'redux';

import City from './reducer_city';
import Venues from './reducer_venues';

const rootReducer = combineReducers({
  city: City,
  venues: Venues
});

export default rootReducer;