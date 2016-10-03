'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer_city = require('./reducer_city');

var _reducer_city2 = _interopRequireDefault(_reducer_city);

var _reducer_venues = require('./reducer_venues');

var _reducer_venues2 = _interopRequireDefault(_reducer_venues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  city: _reducer_city2.default,
  venues: _reducer_venues2.default
});

exports.default = rootReducer;

//# sourceMappingURL=index-compiled.js.map