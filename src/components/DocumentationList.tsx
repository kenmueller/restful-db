import React from 'react'
import * as Bulma from 'react-bulma-components'

import { DocumentationListProps } from '../types/props'

export default class extends React.Component<DocumentationListProps> {
	render = ():  JSX.Element => {
		const { name, children } = this.props
		return (
			<>
				<p className="menu-label">{name}</p>
				<Bulma.Menu.List>{children}</Bulma.Menu.List>
			</>
		)
	}
}
