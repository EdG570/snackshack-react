import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CitySearch from './components/city_search';
import FoodSearch from './components/food_search';
import Venues from './components/venues';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CitySearch} />
    <Route path="/food" component={FoodSearch}></Route>
    <Route path="/venues" component={Venues}></Route>
  </Route>
);