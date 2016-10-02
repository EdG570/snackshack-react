import { combineReducers } from 'redux';

import City from './reducer_city';
import Food from './reducer_food';

const rootReducer = combineReducers({
  city: City,
  food: Food
});

export default rootReducer;