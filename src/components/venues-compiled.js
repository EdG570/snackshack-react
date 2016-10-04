'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Venues = function (_Component) {
  _inherits(Venues, _Component);

  function Venues() {
    _classCallCheck(this, Venues);

    return _possibleConstructorReturn(this, (Venues.__proto__ || Object.getPrototypeOf(Venues)).apply(this, arguments));
  }

  _createClass(Venues, [{
    key: 'renderListItems',
    value: function renderListItems() {
      return this.props.venues.map(function (venue) {
        var photos = venue.venue.featuredPhotos;
        var tips = venue.tips;
        var image = void 0;
        var likes = void 0;

        if (photos && photos.items) {
          var _image = _react2.default.createElement('img', { src: photos.items[0].prefix + '300x200' + photos.items[0].suffix, alt: 'Venue image' });
        } else {
          var _image2 = _react2.default.createElement('img', { src: './assets/snack-logo.svg', alt: 'snackshack logo' });
        }

        if (tips && tips[0].likes) {
          var _likes = _react2.default.createElement(
            'span',
            null,
            'Likes: ',
            tips[0].likes.count
          );
        } else {
          var _likes2 = _react2.default.createElement(
            'span',
            null,
            'Likes: 0'
          );
        }

        return _react2.default.createElement(
          'li',
          { key: venue.venue.name },
          _react2.default.createElement(
            'p',
            null,
            venue.venue.name
          ),
          image,
          _react2.default.createElement(
            'span',
            null,
            'Rating: ',
            venue.venue.rating
          ),
          _react2.default.createElement(
            'span',
            null,
            'Address: ',
            venue.venue.location.address
          ),
          likes
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var list = this.renderListItems();

      if (!this.props.venues) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          null,
          list
        )
      );
    }
  }]);

  return Venues;
}(_react.Component);

Venues.propTypes = {
  venues: _react2.default.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    venues: state.venues.venues
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Venues);

//# sourceMappingURL=venues-compiled.js.map