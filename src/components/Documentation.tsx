import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Bulma from 'react-bulma-components'

import { DEFAULT_DOCUMENTATION_PATH } from '../constants'
import history from '../history'
import { DocumentationProps } from '../types/props'
import { AppState } from '../reducers'
import Navbar from './Navbar'
import CodeBox from './CodeBox'

import '../scss/Documentation.scss'


class Documentation extends React.Component<DocumentationProps> {
	renderCurrentDocument = (): JSX.Element | null => {
		const { section, document } = this.props.match.params
		switch (`${section}/${document}`) {
			case 'install/npm':
				return <>NPM Installation</>
			case 'install/browser':
				return <>Browser Installation</>
			case 'getting-started/retrieving-data':
				return <>Retrieving Data</>
			case 'getting-started/adding-records':
				return <>Adding Records</>
			case 'getting-started/updating-records':
				return <>Updating Records</>
			case 'getting-started/deleting-records':
				return <>Deleting Records</>
			case 'rest/endpoints':
				return <>REST Endpoints</>
			default:
				history.push(DEFAULT_DOCUMENTATION_PATH)
				return null
		}
	}
	
	render = () => (
		<Bulma.Hero size="medium" textWeight="bold" className="documentation-hero">
			<Navbar>
				<h1 className="subtitle light-color navbar-documentation-label">Documentation</h1>
			</Navbar>
			<Bulma.Hero.Body>
				<Bulma.Content textAlignment="centered">
					<h3 className="subtitle light-color">Your unique project ID:</h3>
					<CodeBox
						copyableText={this.props.projectId}
						width="635px"
						centered
					/>
				</Bulma.Content>
				<Bulma.Columns>
					<Bulma.Columns.Column size={2} textAlignment="centered">
						<Bulma.Menu>
							<p className="menu-label">Documentation</p>
							<Bulma.Menu.List>
								<Bulma.Menu.List.Item>
									<Link to=""></Link>
								</Bulma.Menu.List.Item>
							</Bulma.Menu.List>
						</Bulma.Menu>
					</Bulma.Columns.Column>
					<Bulma.Columns.Column size={8}>
						<Bulma.Box>
							{this.renderCurrentDocument()}
						</Bulma.Box>
					</Bulma.Columns.Column>
				</Bulma.Columns>
			</Bulma.Hero.Body>
		</Bulma.Hero>
	)
}

const mapStateToProps = ({ projectId }: AppState) => ({ projectId })

export default connect(mapStateToProps)(Documentation)
