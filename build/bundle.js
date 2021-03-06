/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/users');

            case 2:
              res = _context.sent;

              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get('/current_user');

            case 2:
              res = _context2.sent;

              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';
var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.get('/admins');

            case 2:
              res = _context3.sent;


              dispatch({
                type: FETCH_ADMINS,
                payload: res
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(17);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(19);

var _Home2 = _interopRequireDefault(_Home);

var _UserList = __webpack_require__(20);

var _UserList2 = _interopRequireDefault(_UserList);

var _NotFound = __webpack_require__(21);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Admins = __webpack_require__(22);

var _Admins2 = _interopRequireDefault(_Admins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _Home2.default, {
    path: '/',
    exact: true
  }), _extends({}, _UserList2.default, {
    path: '/users'
  }), _extends({}, _Admins2.default, {
    path: '/admins'
  }), _extends({}, _NotFound2.default)]
})];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = __webpack_require__(12);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _reactRouterConfig = __webpack_require__(4);

var _renderer = __webpack_require__(13);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(24);

var _createStore2 = _interopRequireDefault(_createStore);

var _routes = __webpack_require__(7);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Proxy to send request to handle requests for protected content from the API, inside the server,
// thus keeping the cookies being automatically sent.
// Proxy decorator deal with Google OAuth flow
app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;
    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      // ensures that all items in the promises array are executed,
      // even if one or more of them result in an error.
      return new Promise(function (res) {
        promise.then(res).catch(res);
      });
    }
    return null;
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(14);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _server = __webpack_require__(15);

var _emotionServer = __webpack_require__(16);

var _reactRouterDom = __webpack_require__(5);

var _reactRouterConfig = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(31);

var _routes = __webpack_require__(7);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var app = _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
      )
    )
  );

  // SEO support:
  var helmet = _reactHelmet.Helmet.renderStatic();
  var meta = helmet.meta.toString();
  var title = helmet.title.toString();

  var content = (0, _server.renderToString)(app);

  var _extractCritical = (0, _emotionServer.extractCritical)(content),
      ids = _extractCritical.ids,
      css = _extractCritical.css;

  // window.INITIAL_STATE Hydrate the client store with the server store

  return '\n    <html>\n      <head>\n        ' + meta + '\n        ' + title + '\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script>\n          window.INITIAL_STYLE = ' + (0, _serializeJavascript2.default)(ids) + '\n        </script>\n        <style>\n          ' + css + '\n        </style>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("emotion-server");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterConfig = __webpack_require__(4);

var _actions = __webpack_require__(2);

var _Header = __webpack_require__(18);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      null,
      (0, _reactRouterConfig.renderRoutes)(route.routes)
    )
  );
};

App.propTypes = {
  route: _propTypes2.default.shape({
    routes: _propTypes2.default.arrayOf(_propTypes2.default.shape({ path: _propTypes2.default.string, exact: _propTypes2.default.bool }))
  }).isRequired
};

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchCurrentUser)());
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(3);

var _reactEmotion = __webpack_require__(6);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'css-1r7uice0'
})('width:100%;height:50px;display:flex;align-items:center;justify-content:space-between;background-color:#fca900;a{color:#31343f;font-family:Arial;font-weight:bold;text-decoration:none;margin-left:10px;}');

var Block = /*#__PURE__*/(0, _reactEmotion2.default)('dvi', {
  target: 'css-1r7uice1'
})('display:flex;align-items:center;margin-right:', function (props) {
  return props.right ? '20px' : '0';
}, ';margin-left:', function (props) {
  return props.left ? '20px' : '0';
}, ';');

var Header = function Header(_ref) {
  var auth = _ref.auth;
  return _react2.default.createElement(
    Nav,
    null,
    _react2.default.createElement(
      Block,
      { left: true },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        'React SSR'
      )
    ),
    _react2.default.createElement(
      Block,
      { right: true },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/users' },
        'Users'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/admins' },
        'Admins'
      ),
      auth ? _react2.default.createElement(
        'a',
        { href: 'api/logout' },
        'Logout'
      ) : _react2.default.createElement(
        'a',
        { href: 'api/auth/google' },
        'Login'
      )
    )
  );
};

Header.propTypes = {
  auth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    _id: _propTypes2.default.string,
    googleId: _propTypes2.default.string,
    __v: _propTypes2.default.number
  })]).isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return { auth: state.auth };
})(Header);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(6);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'css-1gu83u90'
})('display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;min-height:300px;font-family:Arial;');

var Button = /*#__PURE__*/(0, _reactEmotion2.default)('button', {
  target: 'css-1gu83u91'
})('padding:12px;color:#eee;font-weight:bold;border-radiux:8px;background-color:#fca900;border:none;');

var Home = function Home() {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Home'
    ),
    _react2.default.createElement(
      Button,
      { onClick: function onClick() {
          return console.log('Hi there!');
        } },
      'Press me!'
    )
  );
};

exports.default = {
  component: Home
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(31);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_Component) {
  _inherits(UserList, _Component);

  function UserList() {
    _classCallCheck(this, UserList);

    return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
  }

  _createClass(UserList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: 'render',
    value: function render() {
      var users = this.props.users;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Users List'
          ),
          _react2.default.createElement('meta', { property: 'og:title', content: 'Users List' })
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Open list of users'
        ),
        _react2.default.createElement(
          'ul',
          null,
          users.map(function (user) {
            return _react2.default.createElement(
              'li',
              { key: user.id },
              user.name
            );
          })
        )
      );
    }
  }]);

  return UserList;
}(_react.Component);

UserList.propTypes = {
  fetchUsers: _propTypes2.default.func.isRequired,
  users: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number,
    name: _propTypes2.default.string
  }))
};
UserList.defaultProps = {
  users: []
};
var loadData = exports.loadData = function loadData(store) {
  return store.dispatch((0, _actions.fetchUsers)());
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(function (state) {
    return { users: state.users };
  }, { fetchUsers: _actions.fetchUsers })(UserList)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEmotion = __webpack_require__(6);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'css-netm690'
})('display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;min-height:300px;font-family:Arial;');

var NotFound = function NotFound(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      'h4',
      null,
      'These aren\'t the Droids you\'re looking for. . .'
    )
  );
};

NotFound.propTypes = {
  staticContext: _propTypes2.default.object
};

NotFound.defaultProps = {
  staticContext: {}
};

exports.default = {
  component: NotFound
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(2);

var _requireAuth = __webpack_require__(23);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_Component) {
  _inherits(AdminsListPage, _Component);

  function AdminsListPage() {
    _classCallCheck(this, AdminsListPage);

    return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
  }

  _createClass(AdminsListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchAdmins();
    }
  }, {
    key: 'render',
    value: function render() {
      var admins = this.props.admins;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Protected list of admins'
        ),
        _react2.default.createElement(
          'ul',
          null,
          admins.map(function (admin) {
            return _react2.default.createElement(
              'li',
              { key: admin.id },
              admin.name
            );
          })
        )
      );
    }
  }]);

  return AdminsListPage;
}(_react.Component);

AdminsListPage.propTypes = {
  fetchAdmins: _propTypes2.default.func.isRequired,
  admins: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number,
    name: _propTypes2.default.string
  }))
};
AdminsListPage.defaultProps = {
  admins: []
};
exports.default = {
  component: (0, _reactRedux.connect)(function (_ref) {
    var admins = _ref.admins;
    return { admins: admins };
  }, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage)),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchAdmins)());
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (ChildComponent) {
  var RequireAuth = function RequireAuth(props) {
    switch (props.auth) {
      case false:
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      case null:
        return _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      default:
        return _react2.default.createElement(ChildComponent, props);
    }
  };

  RequireAuth.propTypes = {
    auth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
      _id: _propTypes2.default.string,
      googleId: _propTypes2.default.string,
      __v: _propTypes2.default.number
    })]).isRequired
  };

  function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
  }

  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _axios = __webpack_require__(25);

var _axios2 = _interopRequireDefault(_axios);

var _reduxThunk = __webpack_require__(26);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(27);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  // It fools the API so that it thinks that the call is being made by the user and not by the
  // rendering server, so it will have access to the cookie.
  var axiosInstance = _axios2.default.create({
    baseURL: 'https://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _users = __webpack_require__(28);

var _users2 = _interopRequireDefault(_users);

var _auth = __webpack_require__(29);

var _auth2 = _interopRequireDefault(_auth);

var _admins = __webpack_require__(30);

var _admins2 = _interopRequireDefault(_admins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _users2.default,
  auth: _auth2.default,
  admins: _admins2.default
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

var _actions = __webpack_require__(2);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })
/******/ ]);