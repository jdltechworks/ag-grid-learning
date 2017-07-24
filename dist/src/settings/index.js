'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var array = _propTypes2.default.array,
    bool = _propTypes2.default.bool,
    func = _propTypes2.default.func,
    object = _propTypes2.default.object,
    string = _propTypes2.default.string,
    number = _propTypes2.default.number;

/**
 * Created a separate props config to reduce bloated classes
 * @type {Object}
 */

var GridSettings = {
	/**
  * Require fields
  * @type {[type]}
  */
	icons: string.isRequired,
	rowSelection: string.isRequired,
	rowData: array.isRequired,
	showToolPanel: bool.isRequired,
	onReady: func.isRequired,

	/**
  * Optional fields but data type must be followed
  * @type {[type]}
  */
	enableSorting: string,
	enableFilter: string,
	rowHeight: string
};

exports.default = GridSettings;
//# sourceMappingURL=index.js.map