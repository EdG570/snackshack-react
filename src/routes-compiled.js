'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _city_search = require('./components/city_search');

var _city_search2 = _interopRequireDefault(_city_search);

var _food_search = require('./components/food_search');

var _food_search2 = _interopRequireDefault(_food_search);

var _venues = require('./components/venues');

var _venues2 = _interopRequireDefault(_venues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _app2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _city_search2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/food', component: _food_search2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/venues', component: _venues2.default })
);

//# sourceMappingURL=routes-compiled.js.map