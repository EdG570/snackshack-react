'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveCity = saveCity;
exports.fetchVenues = fetchVenues;
var actions = exports.actions = {
  SAVE_CITY: 'SAVE_CITY',
  FETCH_VENUES: 'FETCH_VENUES',
  FETCH_VENUES_SUCCESS: 'FETCH_VENUES_SUCCESS',
  FETCH_VENUES_ERROR: 'FETCH_VENUES_ERROR'
};

function saveCity(city) {
  return {
    type: actions.SAVE_CITY,
    payload: city
  };
}

function fetchVenues(city, food) {
  return fetchVenuesAction(city, food);
}

function fetchVenuesAction(city, food) {
  var rootURL = 'https://api.foursquare.com/v2/venues/explore?';
  var API_ID = 'MFKB5Y1UIUJQ3S2G2YI3CD5EAGRPIODYIATL1FGLCXD1N1TF';
  var API_SECRET = '1VABGDFHKQ3BDAUOGYV4NJ5NL0B3XCQ2JRQ4MMIDKC3IGNVW';
  var version = '20140806';

  return {
    type: actions.FETCH_VENUES,
    meta: {
      remote: {
        url: rootURL + 'client_id=' + API_ID + '&client_secret=' + API_SECRET + '&v=' + version + '&near=' + city + '&query=' + food + '&venuePhotos=1'
      }
    }
  };
}

//# sourceMappingURL=index-compiled.js.map