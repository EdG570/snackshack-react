'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _venue_detail = require('./venue_detail');

var _venue_detail2 = _interopRequireDefault(_venue_detail);

var _venue_image = require('./venue_image');

var _venue_image2 = _interopRequireDefault(_venue_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Venue = function (_Component) {
  _inherits(Venue, _Component);

  function Venue(props) {
    _classCallCheck(this, Venue);

    return _possibleConstructorReturn(this, (Venue.__proto__ || Object.getPrototypeOf(Venue)).call(this, props));
  }

  _createClass(Venue, [{
    key: 'render',
    value: function render() {
      var venue = this.props.venue.venue;

      return _react2.default.createElement(
        'li',
        { key: venue.name },
        _react2.default.createElement(
          'h2',
          null,
          venue.name
        ),
        _react2.default.createElement(_venue_image2.default, { venue: this.props.venue }),
        _react2.default.createElement(_venue_detail2.default, { venue: this.props.venue })
      );
    }
  }]);

  return Venue;
}(_react.Component);

Venue.propTypes = {
  venue: _react2.default.PropTypes.object.isRequired
};

exports.default = Venue;

//# sourceMappingURL=venue-compiled.js.map