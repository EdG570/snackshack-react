"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VenueDetails = function (_Component) {
  _inherits(VenueDetails, _Component);

  function VenueDetails(props) {
    _classCallCheck(this, VenueDetails);

    var _this = _possibleConstructorReturn(this, (VenueDetails.__proto__ || Object.getPrototypeOf(VenueDetails)).call(this, props));

    _this.isLikes = _this.isLikes.bind(_this);
    _this.isRating = _this.isRating.bind(_this);
    _this.isAddress = _this.isAddress.bind(_this);
    return _this;
  }

  _createClass(VenueDetails, [{
    key: "isLikes",
    value: function isLikes() {
      var tips = this.props.venue.tips;
      var likes = void 0;

      if (tips && tips[0].likes) {
        likes = _react2.default.createElement(
          "span",
          null,
          tips[0].likes.count,
          " Likes"
        );
      } else {
        likes = _react2.default.createElement(
          "span",
          null,
          "0 Likes"
        );
      }

      return likes;
    }
  }, {
    key: "isRating",
    value: function isRating() {
      var venue = this.props.venue.venue;
      var rating = void 0;

      if (venue.rating) {
        rating = _react2.default.createElement(
          "span",
          null,
          venue.rating
        );
      } else {
        rating = _react2.default.createElement(
          "span",
          null,
          "NR"
        );
      }

      return rating;
    }
  }, {
    key: "isAddress",
    value: function isAddress() {
      var venue = this.props.venue.venue;
      var address = void 0;

      if (venue.location && venue.location.address) {
        address = _react2.default.createElement(
          "span",
          null,
          venue.location.address
        );
      } else {
        address = _react2.default.createElement(
          "span",
          null,
          "Address unavailable"
        );
      }

      return address;
    }
  }, {
    key: "render",
    value: function render() {
      var likes = this.isLikes();
      var rating = this.isRating();
      var address = this.isAddress();

      return _react2.default.createElement(
        "div",
        { className: "venue-detail" },
        rating,
        address,
        likes
      );
    }
  }]);

  return VenueDetails;
}(_react.Component);

VenueDetails.propTypes = {
  venue: _react2.default.PropTypes.object.isRequired
};

exports.default = VenueDetails;

//# sourceMappingURL=venue_detail-compiled.js.map