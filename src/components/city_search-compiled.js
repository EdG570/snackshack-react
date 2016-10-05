'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _index = require('../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CitySearch = function (_Component) {
  _inherits(CitySearch, _Component);

  function CitySearch(props) {
    _classCallCheck(this, CitySearch);

    var _this = _possibleConstructorReturn(this, (CitySearch.__proto__ || Object.getPrototypeOf(CitySearch)).call(this, props));

    _this.state = {
      city: '',
      error: ''
    };
    return _this;
  }

  _createClass(CitySearch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.searchInput.focus();
    }
  }, {
    key: 'validate',
    value: function validate(e) {
      var regex = /^[a-zA-Z\s\,]*$/;

      if (!this.state.city) {
        e.preventDefault();
        this.setState({ error: 'This field cannot be empty' });
      } else if (!regex.test(this.state.city)) {
        e.preventDefault();
        this.setState({ error: 'This field only accepts letters' });
      }

      if (this.state.error) {
        return;
      }

      this.props.saveCity(this.state.city);
    }
  }, {
    key: 'updateState',
    value: function updateState(e) {
      this.setState({ city: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'search-container' },
        _react2.default.createElement(
          'h1',
          null,
          'SNACKSHACK'
        ),
        _react2.default.createElement(
          'span',
          { className: 'error-msg' },
          this.state.error
        ),
        _react2.default.createElement('input', { type: 'text',
          value: this.state.city,
          placeholder: 'Enter a location here',
          ref: function ref(input) {
            return _this2.searchInput = input;
          },
          onChange: this.updateState.bind(this)
        }),
        _react2.default.createElement(
          _reactRouter.Link,
          { onClick: this.validate.bind(this), to: '/food' },
          'Next'
        )
      );
    }
  }]);

  return CitySearch;
}(_react.Component);

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ saveCity: _index.saveCity }, dispatch);
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CitySearch);

//# sourceMappingURL=city_search-compiled.js.map