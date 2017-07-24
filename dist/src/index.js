'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.grid = undefined;

var _Grid = require('./modules/Grid');

var _module = _interopRequireWildcard(_Grid);

var _GridContainer = require('./container/GridContainer');

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _main = require('ag-grid-enterprise/main');

require('ag-grid/dist/styles/ag-grid.css');

require('ag-grid/dist/styles/theme-bootstrap.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

_main.LicenseManager.setLicenseKey(process && process.env && process.env.AG_KEY || 'BigZeta_LLC_synoptic.ai_2Devs1_SaaS_24_February_2018__MTUxOTQzMDQwMDAwMA==c8e052107f77db79954aff8adccc8f06');

//Styles
var grid = exports.grid = _module;

exports.default = function (props) {
	return _react2.default.createElement(
		_container2.default,
		props,
		_react2.default.createElement(_GridContainer2.default, null)
	);
};
//# sourceMappingURL=index.js.map