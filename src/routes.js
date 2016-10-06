import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CitySearch from './components/city_search';
import FoodSearch from './components/food_search';
import VenuesList from './components/venues_list/venues_list';
import VenueDetail from './components/venue_detail/venue_detail';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CitySearch} />
    <Route path="/food" component={FoodSearch} />
    <Route path="/venues" component={VenuesList} />
    <Route path="/venues/:venue" component={VenueDetail} />
  </Route>
);