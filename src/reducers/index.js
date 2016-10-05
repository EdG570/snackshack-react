import { combineReducers } from 'redux';

import City from './reducer_search';
import Venues from './reducer_venues';
import Food from './reducer_search';

const rootReducer = combineReducers({
  city: City,
  food: Food,
  venues: Venues
});

export default rootReducer;