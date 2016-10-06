'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _venue_image = require('../venues_list/venue_image');

var _venue_image2 = _interopRequireDefault(_venue_image);

var _user_feedback = require('./user_feedback');

var _user_feedback2 = _interopRequireDefault(_user_feedback);

var _header = require('../header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VenueDetail = function (_Component) {
  _inherits(VenueDetail, _Component);

  function VenueDetail(props) {
    _classCallCheck(this, VenueDetail);

    return _possibleConstructorReturn(this, (VenueDetail.__proto__ || Object.getPrototypeOf(VenueDetail)).call(this, props));
  }

  _createClass(VenueDetail, [{
    key: 'findVenue',
    value: function findVenue() {
      var _this2 = this;

      return this.props.venues.filter(function (venue) {
        return venue.venue.name === _this2.props.params.venue;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var selectedVenue = this.findVenue();
      var name = selectedVenue[0].venue.name;

      return _react2.default.createElement(
        'div',
        { className: 'venue-container' },
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_venue_image2.default, { venue: selectedVenue[0] }),
        _react2.default.createElement(_user_feedback2.default, { venue: selectedVenue[0] }),
        console.log(selectedVenue)
      );
    }
  }]);

  return VenueDetail;
}(_react.Component);

VenueDetail.propTypes = {
  venues: _react2.default.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    venues: state.venues.venues
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(VenueDetail);

//# sourceMappingURL=venue_detail-compiled.js.map