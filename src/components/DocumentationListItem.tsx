import React from 'react'
import { Link } from 'react-router-dom'

import { DocumentationListItemProps } from '../types/props'

export default class extends React.Component<DocumentationListItemProps> {
	render = (): JSX.Element => {
		const { name, path, currentPath } = this.props
		const selected = path === currentPath
		return (
			<Link to={`/docs/${path}`}>
				{name}
				{selected ? ' (SELECTED)' : null}
			</Link>
		)
	}
}
