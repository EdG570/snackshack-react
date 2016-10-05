'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _venue = require('./venue');

var _venue2 = _interopRequireDefault(_venue);

var _search_details = require('./search_details');

var _search_details2 = _interopRequireDefault(_search_details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VenuesList = function (_Component) {
  _inherits(VenuesList, _Component);

  function VenuesList(props) {
    _classCallCheck(this, VenuesList);

    return _possibleConstructorReturn(this, (VenuesList.__proto__ || Object.getPrototypeOf(VenuesList)).call(this, props));
  }

  _createClass(VenuesList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'venue-list' },
        _react2.default.createElement(
          'h1',
          null,
          'SNACKSHACK'
        ),
        _react2.default.createElement(_search_details2.default, null),
        _react2.default.createElement(
          'ul',
          null,
          this.props.venues.map(function (venue) {
            return _react2.default.createElement(_venue2.default, { key: venue.venue.name, venue: venue });
          })
        )
      );
    }
  }]);

  return VenuesList;
}(_react.Component);

VenuesList.propTypes = {
  venues: _react2.default.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    venues: state.venues.venues
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(VenuesList);

//# sourceMappingURL=venues_list-compiled.js.map