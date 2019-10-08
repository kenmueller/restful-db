import React from 'react'
import * as Bulma from 'react-bulma-components'

import '../css/App.scss'
import fullLogo from '../images/logo-full.png'
import truncatedLogo from '../images/logo-truncated.png'
import CopyableTextBox from './CopyableTextBox'
import UUID from 'uuid/v4'

export default class extends React.Component {
	projectId = UUID()

	render() {
		return (
			<Bulma.Hero size="medium" color="info" textWeight="bold" className="main-header">
				<Bulma.Hero.Head>
					<Bulma.Navbar>
						<Bulma.Container>
							<img
								src={truncatedLogo}
								alt="Logo"
								className="navbar-logo"
							/>
							<Bulma.Navbar.Menu>
								<div className="navbar-end">
									<Bulma.Tabs align="right">
										<ul>
											<li><a href="/">Home</a></li>
											<li><a href="/">Documentation</a></li>
											<li><a href="/">Packages</a></li>
										</ul>
									</Bulma.Tabs>
								</div>
							</Bulma.Navbar.Menu>
						</Bulma.Container>
					</Bulma.Navbar>
				</Bulma.Hero.Head>
				<Bulma.Hero.Body>
					<Bulma.Container textAlignment="centered">
						<img src={fullLogo} alt="Restful DB" className="main-logo" />
						<div className="create-new-project">
							<h1 className="title">Create a new project</h1>
							<CopyableTextBox text={this.projectId} />
						</div>
					</Bulma.Container>
				</Bulma.Hero.Body>
			</Bulma.Hero>
		)
	}
}