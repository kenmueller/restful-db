import React from 'react'

import { DocumentationHeadProps } from '../types/props'

import '../scss/DocumentationHead.scss'

export default class extends React.Component<DocumentationHeadProps> {
	render = (): JSX.Element => (
		<>
			<h1 className="title light-color">{this.props.name}</h1>
			<hr className="documentation-head-separator" />
		</>
	)
}
