'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _agGridReact = require('ag-grid-react');

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

var _GridHeader = require('../components/GridHeader');

var _GridHeader2 = _interopRequireDefault(_GridHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hooker = function () {
	function Hooker() {
		_classCallCheck(this, Hooker);
	}

	_createClass(Hooker, [{
		key: 'init',
		value: function init(params) {
			console.log(params);
		}
	}, {
		key: 'getGui',
		value: function getGui() {
			return _react2.default.createElement(
				_GridHeader2.default,
				null,
				'asdfasdfas'
			);
		}
	}]);

	return Hooker;
}();

var GridContainer = function (_Component) {
	_inherits(GridContainer, _Component);

	function GridContainer() {
		_classCallCheck(this, GridContainer);

		return _possibleConstructorReturn(this, (GridContainer.__proto__ || Object.getPrototypeOf(GridContainer)).apply(this, arguments));
	}

	_createClass(GridContainer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var props = this.props;
			var grid = props.actions.grid;

			grid.attachDefHeaders(Hooker);
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			var grid = props.grid;

			console.log(grid);
			return _react2.default.createElement(_agGridReact.AgGridReact, grid);
		}
	}]);

	return GridContainer;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return { grid: state.grid };
})(GridContainer);
//# sourceMappingURL=GridContainer.js.map