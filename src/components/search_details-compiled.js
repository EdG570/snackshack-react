'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchDetails = function (_Component) {
  _inherits(SearchDetails, _Component);

  function SearchDetails() {
    _classCallCheck(this, SearchDetails);

    return _possibleConstructorReturn(this, (SearchDetails.__proto__ || Object.getPrototypeOf(SearchDetails)).apply(this, arguments));
  }

  _createClass(SearchDetails, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Displaying results for ' + this.props.food + ' in ' + this.props.city
        )
      );
    }
  }]);

  return SearchDetails;
}(_react.Component);

;

SearchDetails.propTypes = {
  city: _react2.default.PropTypes.string.isRequired,
  food: _react2.default.PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    city: state.query.city,
    food: state.query.food
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SearchDetails);

//# sourceMappingURL=search_details-compiled.js.map