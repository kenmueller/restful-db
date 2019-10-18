import React from 'react'
import { Link } from 'react-router-dom'
import * as Bulma from 'react-bulma-components'

import { DocumentationListItemProps } from '../types/props'


export default class extends React.Component<DocumentationListItemProps> {
	render = (): JSX.Element => {
		const { name, path } = this.props
		return (
			<Bulma.Menu.List.Item>
				<Link></Link>
			</Bulma.Menu.List.Item>
		)
	}
}
