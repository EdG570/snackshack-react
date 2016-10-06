"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserFeedback = function UserFeedback(_ref) {
  var venue = _ref.venue;

  var rating = venue.venue.rating;
  var likes = venue.tips[0].likes.summary;
  var price = venue.venue.price.message;

  return _react2.default.createElement(
    "div",
    { className: "user-feedback" },
    _react2.default.createElement(
      "span",
      null,
      rating
    ),
    _react2.default.createElement(
      "span",
      null,
      likes
    ),
    _react2.default.createElement(
      "span",
      null,
      price
    )
  );
};

UserFeedback.propTypes = {
  venue: _react2.default.PropTypes.object.isRequired
};

exports.default = UserFeedback;

//# sourceMappingURL=user_feedback-compiled.js.map