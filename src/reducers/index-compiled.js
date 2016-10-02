'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer_city = require('./reducer_city');

var _reducer_city2 = _interopRequireDefault(_reducer_city);

var _reducer_food = require('./reducer_food');

var _reducer_food2 = _interopRequireDefault(_reducer_food);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  city: _reducer_city2.default,
  food: _reducer_food2.default
});

exports.default = rootReducer;

//# sourceMappingURL=index-compiled.js.map