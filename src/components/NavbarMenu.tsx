import React from 'react'
import { Link } from 'react-router-dom'
import * as Bulma from 'react-bulma-components'

import { DEFAULT_DOCUMENTATION_PATH } from '../constants'

import '../scss/NavbarMenu.scss'

export default class extends React.Component {
	render = ():  JSX.Element => (
		<Bulma.Navbar.Menu>
			<div className="navbar-end">
				<Bulma.Tabs align="right" className="navbar-menu-right-tabs">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to={DEFAULT_DOCUMENTATION_PATH}>Documentation</Link></li>
					</ul>
				</Bulma.Tabs>
			</div>
		</Bulma.Navbar.Menu>
	)
}
