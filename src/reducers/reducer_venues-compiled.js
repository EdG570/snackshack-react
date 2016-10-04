'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _index.actions.FETCH_VENUES_SUCCESS:
      console.log(action.payload);
      return Object.assign({}, state, {
        venues: action.payload.response.groups[0].items
      });
    case _index.actions.FETCH_VENUES_ERROR:
      return Object.assign({}, state, {
        errors: action.payload
      });
    default:
      return state;
  }
};

var _index = require('../actions/index');

var initialState = {
  venues: [],
  errors: {}
};

//# sourceMappingURL=reducer_venues-compiled.js.map