import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Bulma from 'react-bulma-components'

import { HomeProps } from '../types/props'
import { AppState } from '../reducers'
import Navbar from './Navbar'
import CodeBox from './CodeBox'

import '../scss/Home.scss'
import logo from '../images/logo.png'

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
					<Navbar />
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
									width="635px"
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
								<h3 className="subtitle light-color">Setup code:</h3>
								{this.renderDatabaseInitialization()}
							</Bulma.Columns.Column>
						</Bulma.Columns>
					</Bulma.Container>
				</Bulma.Section>
				<Bulma.Section className="light-background-color">
					<Bulma.Container>
						<Bulma.Columns>
							<Bulma.Columns.Column size="three-quarters" className="more-information">
								<h3 className="subtitle light-color">Go to <Link to="/docs"><b>/docs</b></Link> to learn more</h3>
								<br />
								<h3 className="subtitle light-color">
									By <a
										href="https://github.com/kenmueller"
										target="_blank"
										rel="noopener noreferrer"
									>
										Ken Mueller
									</a>
								</h3>
							</Bulma.Columns.Column>
						</Bulma.Columns>
					</Bulma.Container>
				</Bulma.Section>
			</>
		)
	}
}

const mapStateToProps = ({ projectId }: AppState) => ({ projectId })

export default connect(mapStateToProps)(Home)