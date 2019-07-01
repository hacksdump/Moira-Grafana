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

/***/ "./components/MoiraPanel.tsx":
/*!***********************************!*\
  !*** ./components/MoiraPanel.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoiraPanel = undefined;

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
  var targets = props.target.targets.map(function (target) {
    return _react2.default.createElement("li", {
      key: target
    }, target);
  });
  return _react2.default.createElement("div", {
    style: {
      border: '1px solid #555',
      borderRadius: '5px',
      padding: '5px',
      margin: '5px',
      width: '50%'
    }
  }, _react2.default.createElement("div", null, _react2.default.createElement("h4", null, "Warn Value:"), _react2.default.createElement("span", null, props.target.warn_value)), _react2.default.createElement("div", null, _react2.default.createElement("h4", null, "Targets: "), _react2.default.createElement("ul", null, targets)));
}

function MoiraConfigBox(props) {
  var configItems = props.triggers.map(function (item) {
    return _react2.default.createElement(MoiraConfigItem, {
      key: item.id,
      target: item
    });
  });
  return _react2.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, configItems);
}

var MoiraPanel =
/** @class */
function (_super) {
  __extends(MoiraPanel, _super);

  function MoiraPanel(props) {
    return _super.call(this, props) || this;
  }

  MoiraPanel.prototype.componentWillMount = function () {
    var _this = this;

    fetch('http://moira.local/api/trigger/search?onlyProblems=false&p=0&size=20&text=', {
      mode: 'cors'
    }).then(function (result) {
      result.json().then(function (data) {
        _this.props.onOptionsChange(__assign({}, _this.props.options, {
          triggers: data.list
        }));
      });
    });
  };

  MoiraPanel.prototype.render = function () {
    var triggers = this.props.options.triggers;

    if (this.props.data.series) {
      return _react2.default.createElement("div", null, _react2.default.createElement(_ui.GraphWithLegend, {
        timeRange: this.props.timeRange,
        width: 200,
        height: 200,
        series: [{
          yAxis: 1,
          label: this.props.data.series[0].name,
          color: 'green',
          isVisible: true,
          data: this.props.data.series[0].rows
        }],
        isLegendVisible: true,
        displayMode: _ui.LegendDisplayMode.List,
        onSeriesColorChange: function onSeriesColorChange() {
          return console.log('seriescolorchange');
        },
        onToggleSort: function onToggleSort() {
          return console.log('togglesort');
        },
        placement: 'right'
      }), _react2.default.createElement(MoiraConfigBox, {
        triggers: triggers
      }));
    } else {
      return _react2.default.createElement("div", null, "No datasource added");
    }
  };

  return MoiraPanel;
}(_react.PureComponent);

exports.MoiraPanel = MoiraPanel;

/***/ }),

/***/ "./components/MoiraPanelEditor.tsx":
/*!*****************************************!*\
  !*** ./components/MoiraPanelEditor.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoiraPanelEditor = undefined;

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

var MoiraPanelEditor =
/** @class */
function (_super) {
  __extends(MoiraPanelEditor, _super);

  function MoiraPanelEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onTextChanged = function (event) {
      _this.props.onOptionsChange(__assign({}, _this.props.options, {
        someText: event.target.value
      }));
    };

    return _this;
  }

  MoiraPanelEditor.prototype.render = function () {
    return _react2.default.createElement("div", null, _react2.default.createElement(_ui.PanelOptionsGroup, {
      title: "Trigger Choices"
    }, _react2.default.createElement(_ui.FormField, {
      label: "graphite",
      onChange: this.onTextChanged
    }), _react2.default.createElement(_ui.Button, null)), _react2.default.createElement(_ui.PanelOptionsGrid, null, _react2.default.createElement(_ui.FormField, {
      label: "graph"
    })));
  };

  return MoiraPanelEditor;
}(_react.PureComponent);

exports.MoiraPanelEditor = MoiraPanelEditor;

/***/ }),

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
exports.plugin = undefined;

var _ui = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");

var _MoiraPanel = __webpack_require__(/*! ./components/MoiraPanel */ "./components/MoiraPanel.tsx");

var _MoiraPanelEditor = __webpack_require__(/*! ./components/MoiraPanelEditor */ "./components/MoiraPanelEditor.tsx");

var _types = __webpack_require__(/*! ./types */ "./types.ts");

var plugin = exports.plugin = new _ui.PanelPlugin(_MoiraPanel.MoiraPanel);
plugin.setEditor(_MoiraPanelEditor.MoiraPanelEditor);
plugin.setDefaults(_types.defaults);

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaults = exports.defaults = {
  minValue: 0,
  maxValue: 100,
  layout: 'biggauge',
  showThresholdMarkers: true,
  showThresholdLabels: false,
  showLines: true,
  showBars: false,
  showPoints: false,
  valueOptions: {
    prefix: '',
    suffix: '',
    decimals: null,
    stat: 'avg',
    unit: 'none'
  },
  valueMappings: [],
  thresholds: [{
    index: 0,
    value: -Infinity,
    color: 'green'
  }],
  someText: 'Hello',
  triggers: []
};

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