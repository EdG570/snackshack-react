export const actions = {
  SAVE_CITY: 'SAVE_CITY',
  FETCH_VENUES: 'FETCH_VENUES',
  FETCH_VENUES_SUCCESS: 'FETCH_VENUES_SUCCESS',
  FETCH_VENUES_ERROR: 'FETCH_VENUES_ERROR'
};

export function saveCity(city) {
  return {
    type: actions.SAVE_CITY,
    payload: city
  };
}

export function fetchVenues(city, food) {
  return fetchVenuesAction(city, food);
}

function fetchVenuesAction(city, food) {
  const rootURL = 'https://api.foursquare.com/v2/venues/explore?';
  const API_ID = 'MFKB5Y1UIUJQ3S2G2YI3CD5EAGRPIODYIATL1FGLCXD1N1TF';
  const API_SECRET = '1VABGDFHKQ3BDAUOGYV4NJ5NL0B3XCQ2JRQ4MMIDKC3IGNVW';
  const version = '20140806';

  return {
    type: actions.FETCH_VENUES,
    meta: {
      remote: {
        url: `${rootURL}client_id=${API_ID}&client_secret=${API_SECRET}&v=${version}&near=${city}&query=${food}&venuePhotos=1`
      }
    }
  };
}

