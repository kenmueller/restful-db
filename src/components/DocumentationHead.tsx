import React from 'react'
import Helmet from 'react-helmet'

import { DocumentationHeadProps } from '../types/props'

import '../scss/DocumentationHead.scss'

export default class extends React.Component<DocumentationHeadProps> {
	render = (): JSX.Element => {
		const { name } = this.props
		return (
			<>
				<Helmet>
					<title>Restful DB - {name}</title>
				</Helmet>
				<h1 className="title light-color">{name}</h1>
				<hr className="documentation-head-separator" />
			</>
		)
	}
}
