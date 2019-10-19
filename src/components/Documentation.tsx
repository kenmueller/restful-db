import React from 'react'
import * as Bulma from 'react-bulma-components'

import { DEFAULT_DOCUMENTATION_PATH } from '../constants'
import history from '../history'
import { DocumentationProps } from '../types/props'
import Navbar from './Navbar'
import DocumentationMenu from './DocumentationMenu'

import NPMInstallationDocumentation from './documentation/NPMInstallationDocumentation'

import '../scss/Documentation.scss'

export default class extends React.Component<DocumentationProps> {
	renderCurrentDocument = (path: string): JSX.Element | null => {
		switch (path) {
			case 'install/npm':
				return <NPMInstallationDocumentation />
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
	
	render = (): JSX.Element => {
		const { section, document } = this.props.match.params
		const currentPath = `${section}/${document}`
		return (
			<Bulma.Hero size="medium" textWeight="bold" className="documentation-hero">
				<Navbar>
					<h1 className="subtitle light-color navbar-documentation-label">Documentation</h1>
				</Navbar>
				<Bulma.Hero.Body>
					<Bulma.Columns>
						<Bulma.Columns.Column size="one-quarter">
							<Bulma.Box className="document">
								<DocumentationMenu currentPath={currentPath} />
							</Bulma.Box>
						</Bulma.Columns.Column>
						<Bulma.Columns.Column size={8}>
							<Bulma.Box className="document">
								{this.renderCurrentDocument(currentPath)}
							</Bulma.Box>
						</Bulma.Columns.Column>
					</Bulma.Columns>
				</Bulma.Hero.Body>
			</Bulma.Hero>
		)
	}
}
