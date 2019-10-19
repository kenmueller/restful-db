import React from 'react'
import { connect } from 'react-redux'

import { BrowserInstallationDocumentationProps } from '../../types/props'
import { AppState } from '../../reducers'
import DocumentationHead from '../DocumentationHead'
import CodeBox from '../CodeBox'

class BrowserInstallationDocumentation extends React.Component<BrowserInstallationDocumentationProps> {
	render = () => {
		const { projectId } = this.props
		return (
			<>
				<DocumentationHead name="Browser Installation" />
				<p className="label-text">Add to your &lt;head&gt; tag</p>
				<CodeBox
					copyableText={'<script src="https://restful-db.web.app/api.js"></script>'}
					width="635px"
				/>
				<br />
				<p className="label-text">Your unique project ID:</p>
				<CodeBox
					copyableText={projectId}
					width="635px"
				/>
				<br />
				<p className="label-text">Database initialization:</p>
				<CodeBox width="635px">
					const {'{'} Database {'}'} = restfulDB
					<br /><br />
					const db = new Database('{projectId}')
				</CodeBox>
				<br />
				You can try out commands on this website!
				<br /><br />
				On Mac: Cmd+Option+J
				<br />
				On Windows: Ctrl+Shift+J
			</>
		)
	}
}

const mapStateToProps = ({ projectId }: AppState) => ({ projectId })

export default connect(mapStateToProps)(BrowserInstallationDocumentation)
