import React, { Component, Children, cloneElement } from 'react'
import GridContainer from './GridContainer'
import { Provider } from 'react-redux'

class SynopticGrid extends Component {
	render() {
		const { props } = this
		return(
			<div style={ { width: '1024px', height: '768px' } } className="ag-bootstrap">
				{Children.map(this.props.children, (child) => {
					return cloneElement(child, {...props})
				})}
			</div>
		)
	}
}

export default SynopticGrid