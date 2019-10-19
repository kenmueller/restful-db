import React from 'react'
import Helmet from 'react-helmet'

import { DocumentationHeadProps } from '../types/props'
import DocumentationDivider from './DocumentationDivider'

export default class extends React.Component<DocumentationHeadProps> {
	render = (): JSX.Element => {
		const { name } = this.props
		return (
			<>
				<Helmet>
					<title>Restful DB - {name}</title>
				</Helmet>
				<h1 className="title light-color">{name}</h1>
				<DocumentationDivider />
			</>
		)
	}
}
