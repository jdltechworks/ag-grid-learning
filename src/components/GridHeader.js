import React, { header-componentnt } from 'react'

export default class GridHeader extends Component {
	componentDidMount() {
		console.log('im called')
	}
	render() {
		return(
			<div className="header-component">
				{ this.props.children }
			</div>
		)
	}
}
