import React from 'react'
import { connect } from 'react-redux'

import { NPMInstallationDocumentationProps } from '../../types/props'
import { AppState } from '../../reducers'
import DocumentationHead from '../DocumentationHead'
import CodeBox from '../CodeBox'

class NPMInstallationDocumentation extends React.Component<NPMInstallationDocumentationProps> {
	render = (): JSX.Element => {
		const { projectId } = this.props
		return (
			<>
				<DocumentationHead name="NPM Installation" />
				<CodeBox copyableText="npm i restful-db" width="635px" />
				<br />
				<p className="label-text">Your unique project ID:</p>
				<CodeBox copyableText={projectId} width="635px" />
				<br />
				<p className="label-text">Database initialization:</p>
				<CodeBox width="635px">
					const {'{'} Database {'}'} = require('restful-db')
					<br /><br />
					const db = new Database('{projectId}')
				</CodeBox>
			</>
		)
	}
}

const mapStateToProps = ({ projectId }: AppState) => ({ projectId })

export default connect(mapStateToProps)(NPMInstallationDocumentation)
