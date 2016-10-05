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

var FoodSearch = function (_Component) {
  _inherits(FoodSearch, _Component);

  function FoodSearch(props) {
    _classCallCheck(this, FoodSearch);

    var _this = _possibleConstructorReturn(this, (FoodSearch.__proto__ || Object.getPrototypeOf(FoodSearch)).call(this, props));

    _this.state = {
      food: '',
      error: ''
    };
    return _this;
  }

  _createClass(FoodSearch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.searchInput.focus();
    }
  }, {
    key: 'validate',
    value: function validate(e) {
      var regex = /^[a-zA-Z\s]*$/;

      if (!this.state.food) {
        e.preventDefault();
        this.setState({ error: 'This field cannot be empty' });
      } else if (!regex.test(this.state.food)) {
        e.preventDefault();
        this.setState({ error: 'This field only accepts alpha characters' });
      }

      if (this.state.error) {
        return;
      }

      this.props.saveFood(this.state.food);
      this.props.fetchVenues(this.props.city.city, this.state.food);
    }
  }, {
    key: 'updateState',
    value: function updateState(e) {
      this.setState({ food: e.target.value });
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
        _react2.default.createElement('input', { type: 'text',
          placeholder: 'Enter a type of food here',
          value: this.state.food,
          ref: function ref(input) {
            return _this2.searchInput = input;
          },
          onChange: this.updateState.bind(this)
        }),
        _react2.default.createElement(
          _reactRouter.Link,
          { onClick: this.validate.bind(this), to: '/venues' },
          'Search'
        )
      );
    }
  }]);

  return FoodSearch;
}(_react.Component);

function mapStateToProps(state) {
  return { city: state.city };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchVenues: _index.fetchVenues,
    saveFood: _index.saveFood
  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FoodSearch);

//# sourceMappingURL=food_search-compiled.js.map