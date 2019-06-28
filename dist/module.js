define(["@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./module.tsx":
/*!********************!*\
  !*** ./module.tsx ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactPanel = exports.MyPanelEditorProps = exports.MyPanel = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function MoiraConfigItem(props) {
  var targets = props.targets.map(function (target) {
    return _react2.default.createElement("li", null, target);
  });
  return _react2.default.createElement("div", null, _react2.default.createElement("div", null, _react2.default.createElement("h3", null, props.name), _react2.default.createElement("p", null, props.desc)), _react2.default.createElement("div", null, _react2.default.createElement("h4", null, "Targets: "), _react2.default.createElement("ul", null, targets)), _react2.default.createElement("div", null, _react2.default.createElement("h4", null, "Warn Value:"), _react2.default.createElement("span", null, props.warn_value)));
}

function MoiraConfigBox(props) {
  var configItems = props.items.map(function (item) {
    return _react2.default.createElement(MoiraConfigItem, {
      target: item
    });
  });
  return _react2.default.createElement("div", null, configItems);
}

var MyPanel =
/** @class */
function (_super) {
  __extends(MyPanel, _super);

  function MyPanel(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      triggers: null
    };
    return _this;
  }

  MyPanel.prototype.componentDidMount = function () {
    var _this = this;

    fetch('http://moira.local/api/trigger/search?onlyProblems=false&p=0&size=20&text=').then(function (result) {
      result.json().then(function (data) {
        _this.setState({
          triggers: data.list
        });
      });
    });
  };

  MyPanel.prototype.render = function () {
    var triggers = this.state.triggers;
    return _react2.default.createElement(MoiraConfigBox, {
      items: triggers
    });
  };

  return MyPanel;
}(_react.PureComponent);

exports.MyPanel = MyPanel;

var MyPanelEditorProps =
/** @class */
function (_super) {
  __extends(MyPanelEditorProps, _super);

  function MyPanelEditorProps() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onBigTextChanged = function (evt) {
      _this.props.onChange(__assign({}, _this.props.options, {
        bigText: evt.target.value
      }));
    };

    return _this;
  }

  MyPanelEditorProps.prototype.render = function () {
    var bigText = this.props.options.bigText;
    return _react2.default.createElement(_ui.PanelOptionsGroup, {
      title: "My options"
    }, _react2.default.createElement(_ui.FormField, {
      label: "Big text",
      onChange: this.onBigTextChanged,
      value: bigText
    }));
  };

  return MyPanelEditorProps;
}(_react.PureComponent);

exports.MyPanelEditorProps = MyPanelEditorProps;
var reactPanel = exports.reactPanel = new _ui.ReactPanelPlugin(MyPanel);
reactPanel.setEditor(MyPanelEditorProps);
reactPanel.setDefaults({
  bigText: 'GrafanaCon'
});

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map