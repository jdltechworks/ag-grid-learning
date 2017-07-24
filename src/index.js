import * as module from './modules/Grid'
import GridContainer from './container/GridContainer'
import { render } from 'react-dom'
import React, { Component } from 'react'
import SynopticGrid from './container'

import { LicenseManager } from "ag-grid-enterprise/main"

LicenseManager.setLicenseKey(process.env.AG_KEY)

//Styles
import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/theme-bootstrap.css'

export const grid = module

export default (props) => {
	return(
		<SynopticGrid {...props}>
			<GridContainer />
		</SynopticGrid>
	)
}