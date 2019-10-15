import React from 'react'
import { connect } from 'react-redux'
import * as Bulma from 'react-bulma-components'

import { DocumentationProps } from '../types/props'
import { AppState } from '../reducers'
import Navbar from './Navbar'
import CodeBox from './CodeBox'

import '../scss/Documentation.scss'

class Documentation extends React.Component<DocumentationProps> {
	render() {
		return (
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
						<Bulma.Columns.Column size={3}>
							<Bulma.Menu>
								<p className="menu-label">Documentation</p>
								<Bulma.Menu.List>
									<Bulma.Menu.List.Item></Bulma.Menu.List.Item>
								</Bulma.Menu.List>
							</Bulma.Menu>
						</Bulma.Columns.Column>
						<Bulma.Columns.Column size={9}>
							<Bulma.Box>
								hello
							</Bulma.Box>
						</Bulma.Columns.Column>
					</Bulma.Columns>
				</Bulma.Hero.Body>
			</Bulma.Hero>
		)
	}
}

const mapStateToProps = ({ projectId }: AppState) => ({ projectId })

export default connect(mapStateToProps)(Documentation)
