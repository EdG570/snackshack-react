'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer_search = require('./reducer_search');

var _reducer_search2 = _interopRequireDefault(_reducer_search);

var _reducer_venues = require('./reducer_venues');

var _reducer_venues2 = _interopRequireDefault(_reducer_venues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  query: _reducer_search2.default,
  venues: _reducer_venues2.default
});

exports.default = rootReducer;

//# sourceMappingURL=index-compiled.js.map