'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _index.actions.SAVE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });
    default:
      return state;
  }
};

var _index = require('../actions/index');

var initialState = {
  city: ''
};

//# sourceMappingURL=reducer_city-compiled.js.map