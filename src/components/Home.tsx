import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Bulma from 'react-bulma-components'

import { HomeProps } from '../types/props'
import { AppState } from '../reducers'
import { reloadProjectId } from '../actions'
import CodeBox from './CodeBox'

import '../scss/Home.scss'
import logo from '../images/logo.png'
import compactLogo from '../images/compact-logo.png'

class Home extends React.Component<HomeProps> {
	renderDatabaseInitialization(): JSX.Element {
		return (
			<CodeBox width="635px">
				const {'{'} Database {'}'} = require('restful-db')
				<br /><br />
				const db = new Database('{this.props.projectId}')
			</CodeBox>
		)
	}

	render() {
		return (
			<>
				<Bulma.Hero size="medium" textWeight="bold" className="home-hero">
					<Bulma.Hero.Head>
						<Bulma.Navbar>
							<Bulma.Container>
								<Link to="/">
									<img
										src={compactLogo}
										alt="Logo"
										className="navbar-logo"
									/>
								</Link>
								<Bulma.Navbar.Menu>
									<div className="navbar-end">
										<Bulma.Tabs align="right" className="navbar-right-tabs">
											<ul>
												<li><Link to="/">Home</Link></li>
												<li><Link to="/docs">Documentation</Link></li>
											</ul>
										</Bulma.Tabs>
									</div>
								</Bulma.Navbar.Menu>
							</Bulma.Container>
						</Bulma.Navbar>
					</Bulma.Hero.Head>
					<Bulma.Hero.Body>
						<Bulma.Content textAlignment="centered">
							<img
								src={logo}
								alt="Logo"
								className="main-logo"
							/>
							<h3 className="subtitle main-text-subtitle light-color">
								Zero-setup, super fast database
							</h3>
							<div className="main-packages">
								<h1 className="title light-color">NPM</h1>
								<CodeBox
									copyableText="npm i restful-db"
									width="250px"
								/>
								<h1 className="title light-color">Browser</h1>
								<CodeBox
									copyableText={'<script src="https://wzrd.in/standalone/restful-db"></script>'}
									width="635px"
								/>
							</div>
						</Bulma.Content>
					</Bulma.Hero.Body>
				</Bulma.Hero>
				<Bulma.Section className="dark-background-color">
					<Bulma.Container>
						<Bulma.Columns>
							<Bulma.Columns.Column size="three-quarters" className="create-new-project">
								<h1 className="title light-color">Create a new project</h1>
								<div className="choose-project-id">
									<h3 className="subtitle light-color">Your unique project ID:</h3>
									<CodeBox
										copyableText={this.props.projectId}
										width="635px"
									/>
								</div>
								{this.renderDatabaseInitialization()}
							</Bulma.Columns.Column>
						</Bulma.Columns>
					</Bulma.Container>
				</Bulma.Section>
			</>
		)
	}
}

const mapStateToProps = ({ projectId }: AppState) => ({ projectId })

export default connect(mapStateToProps, { reloadProjectId })(Home)