import React from 'react'
import { Link } from 'react-router-dom'

import { DocumentationListItemProps } from '../types/props'

import '../scss/DocumentationListItem.scss'

export default class extends React.Component<DocumentationListItemProps> {
	render = (): JSX.Element => {
		const { name, path, currentPath } = this.props
		const selected = path === currentPath
		return (
			<Link
				to={`/docs/${path}`}
				className={`documentation-list-item${selected ? ' selected' : ''}`}
			>
				<p className="documentation-list-item-name">{name}</p>
			</Link>
		)
	}
}
