import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AgGridReact as Grid } from 'ag-grid-react'
import GridSettings from '../settings'
import GridHeader from '../components/GridHeader'

class GridContainer extends Component {
	componentDidMount() {
		const { props } = this
		const { actions: { grid } } = props
		grid.attachDefHeaders(GridHeader)
	}
	render() {
		
		const { props } = this
		const { grid } = props
		return(
			<Grid {...grid} />
		)
	}
}

export default connect(state => ({ grid: state.grid }))(GridContainer)