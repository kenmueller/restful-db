import React from 'react'
import * as Bulma from 'react-bulma-components'

import { DocumentationMenuProps } from '../types/props'
import DocumentationList from './DocumentationList'
import DocumentationListItem from './DocumentationListItem'

export default class extends React.Component<DocumentationMenuProps> {
	render = (): JSX.Element => {
		const { currentPath } = this.props
		return (
			<Bulma.Menu>
				<DocumentationList name="Install">
					<DocumentationListItem
						name="NPM"
						path="install/npm"
						currentPath={currentPath}
					/>
					<DocumentationListItem
						name="Browser"
						path="install/browser"
						currentPath={currentPath}
					/>
				</DocumentationList>
				<DocumentationList name="Getting Started">
					<DocumentationListItem
						name="Retrieving Data"
						path="getting-started/retrieving-data"
						currentPath={currentPath}
					/>
					<DocumentationListItem
						name="Adding Records"
						path="getting-started/adding-records"
						currentPath={currentPath}
					/>
					<DocumentationListItem
						name="Updating Records"
						path="getting-started/updating-records"
						currentPath={currentPath}
					/>
					<DocumentationListItem
						name="Deleting Records"
						path="getting-started/deleting-records"
						currentPath={currentPath}
					/>
				</DocumentationList>
				<DocumentationList name="REST API">
					<DocumentationListItem
						name="Endpoints"
						path="rest/endpoints"
						currentPath={currentPath}
					/>
				</DocumentationList>
			</Bulma.Menu>
		)
	}
}
