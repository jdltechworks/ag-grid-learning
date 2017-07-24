'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.reducer = exports.actions = exports.types = exports.initialState = undefined;

var _createReducer;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('./actions');

var GridActions = _interopRequireWildcard(_actions);

var _reduxModuleBuilder = require('redux-module-builder');

var _api = require('redux-module-builder/api');

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = exports.initialState = {
	columnDefs: [{ headerName: "Make", field: "make" }, { headerName: "Model", field: "model" }, { headerName: "Price", field: "price" }],
	icons: '',
	rowSelection: '',
	rowData: [{ make: "Toyota", model: "Celica", price: 35000 }, { make: "Ford", model: "Mondeo", price: 32000 }, { make: "Porsche", model: "Boxter", price: 72000 }],
	showToolPanel: '',
	onGridReady: ''
};

var types = exports.types = (0, _reduxModuleBuilder.createConstants)('grid')('FETCHING', 'FETCHED', 'IS_EMPTY', 'ERROR', 'ADD_EDIT_ELEMENTS');
var actions = exports.actions = {
	attachDefHeaders: function attachDefHeaders(component) {
		console.log(component);
		return function (dispatch, getState) {
			var columnDefs = getState().grid.columnDefs;

			var defs = (0, _map2.default)(columnDefs, function (def) {
				var headerComponentFramework = component;
				return Object.assign(def, { headerComponentFramework: headerComponentFramework });
			});
			dispatch({
				type: types.ADD_EDIT_ELEMENTS,
				columnDefs: defs
			});
		};
	}
};

var reducer = exports.reducer = (0, _reduxModuleBuilder.createReducer)((_createReducer = {}, _defineProperty(_createReducer, types.FETCHING, function (state, _ref) {
	var payload = _ref.payload;

	return _extends({}, state);
}), _defineProperty(_createReducer, types.ADD_EDIT_ELEMENTS, function (state, _ref2) {
	var columnDefs = _ref2.columnDefs;

	return _extends({}, state, {
		columnDefs: columnDefs
	});
}), _createReducer));
//# sourceMappingURL=index.js.map