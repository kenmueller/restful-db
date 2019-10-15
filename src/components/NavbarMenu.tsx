import React from 'react'
import { Link } from 'react-router-dom'
import * as Bulma from 'react-bulma-components'

import '../scss/NavbarMenu.scss'

export default class extends React.Component {
	render() {
		return (
			<Bulma.Navbar.Menu>
				<div className="navbar-end">
					<Bulma.Tabs align="right" className="navbar-menu-right-tabs">
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/docs">Documentation</Link></li>
						</ul>
					</Bulma.Tabs>
				</div>
			</Bulma.Navbar.Menu>
		)
	}
}
