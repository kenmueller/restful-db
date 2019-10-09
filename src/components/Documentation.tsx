import React from 'react'
import { connect } from 'react-redux'
import * as Bulma from 'react-bulma-components'

import { DocumentationProps } from '../types/props'
import { AppState } from '../reducers'
import Navbar from './Navbar'

import '../scss/Documentation.scss'

class Documentation extends React.Component<DocumentationProps> {
	render() {
		return (
			<Bulma.Hero size="medium" textWeight="bold" className="documentation-hero">
				<Navbar>
					<h1 className="subtitle light-color navbar-documentation-label">Documentation</h1>
				</Navbar>
			</Bulma.Hero>
		)
	}
}

const mapStateToProps = ({ projectId }: AppState) => ({ projectId })

export default connect(mapStateToProps)(Documentation)