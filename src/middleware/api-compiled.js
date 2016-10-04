'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store) {
  return function (next) {
    return function (action) {
      if (action.meta && action.meta.remote) {

        _axios2.default.get(action.meta.remote.url).then(function (response) {
          store.dispatch({ type: action.type + '_SUCCESS', payload: response.data });
        }).catch(function (err) {
          store.dispatch({ type: action.type + '_ERROR', payload: err });
        });
      }

      return next(action);
    };
  };
};

//# sourceMappingURL=api-compiled.js.map