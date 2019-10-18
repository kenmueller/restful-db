import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/NavbarLogo.scss'
import compactLogo from '../images/compact-logo.png'

export default class extends React.Component {
	render = ():  JSX.Element => (
		<Link to="/">
			<img
				src={compactLogo}
				alt="Logo"
				className="navbar-logo"
			/>
		</Link>
	)
}
