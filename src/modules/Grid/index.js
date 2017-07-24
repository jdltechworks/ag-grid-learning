import * as GridActions from './actions'
import {createConstants, createReducer} from 'redux-module-builder'
import {createApiAction} from 'redux-module-builder/api'
import map from 'lodash/map'

//https://github.com/ceolter/ag-grid-react-example/tree/master/src/richGridExample

export const initialState = {
	columnDefs: [
	    {headerName: "Make", field: "make"},
	    {headerName: "Model", field: "model"},
	    {headerName: "Price", field: "price"}
	],
	icons: '',	
	rowSelection: '',	
	rowData: [
		{make: "Toyota", model: "Celica", price: 35000},
		{make: "Ford", model: "Mondeo", price: 32000},
		{make: "Porsche", model: "Boxter", price: 72000}
	],
	showToolPanel: '',	
	onGridReady: ''	
}

export const types = createConstants('grid')(
	'FETCHING',
	'FETCHED',
	'IS_EMPTY',
	'ERROR',
	'ADD_EDIT_ELEMENTS'
)
export const actions = {
	attachDefHeaders(component) {
		return(dispatch, getState) => {
			const { columnDefs } = getState().grid
			const defs = map(columnDefs, (def) => {
				const headerComponentFramework = component
				return Object.assign(def, { headerComponentFramework })
			})
			dispatch({
				type: types.ADD_EDIT_ELEMENTS,
				columnDefs
			})	
		}
	}
}

export const reducer = createReducer({
	[types.FETCHING]: (state, { payload }) => {
		return {
			...state,
		}
	},
	[types.ADD_EDIT_ELEMENTS]: (state, { columnDefs }) => {
		return {
			...state,
			...columnDefs
		}
	}
})
