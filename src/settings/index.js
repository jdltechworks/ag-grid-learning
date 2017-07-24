import PropTypes from 'prop-types'

const { array, bool, func, object, string, number  } = PropTypes

/**
 * Created a separate props config to reduce bloated classes
 * @type {Object}
 */
const GridSettings = {
	/**
	 * Require fields
	 * @type {[type]}
	 */
	icons: 			string.isRequired,
	rowSelection: 	string.isRequired,
	rowData: 		array.isRequired,
	showToolPanel: 	bool.isRequired,
	onReady: 		func.isRequired,
	
	/**
	 * Optional fields but data type must be followed
	 * @type {[type]}
	 */
	enableSorting: 	string,
	enableFilter: 	string,
	rowHeight: 		string,
}

export default GridSettings