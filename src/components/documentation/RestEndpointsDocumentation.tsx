import React from 'react'
import { connect } from 'react-redux'

import { RestEndpointsDocumentationProps } from '../../types/props'
import { AppState } from '../../reducers'
import DocumentationHead from '../DocumentationHead'
import DocumentationDivider from '../DocumentationDivider'
import CodeBox from '../CodeBox'

class RestEndpointsDocumentation extends React.Component<RestEndpointsDocumentationProps> {
	render = () => {
		const { projectId } = this.props
		return (
			<>
				<DocumentationHead name="REST Endpoints" />
				<p className="label-text">Base URL:</p>
				<CodeBox
					copyableText={`https://restful-db.web.app/api/${projectId}`}
					width="690px"
				/>
				<DocumentationDivider />
				<p className="label-text">Retrieve all data</p>
				<span className="yellow-text">GET</span>&nbsp;/
				<br /><br />
				<p className="label-text">Example response:</p>
				<CodeBox width="690px">
					{'{'}"users":[{'{'}"id":"abc","name":"Ken"{'}'},{'{'}"id":"def","name":"Scott"{'}'}]{'}'}
				</CodeBox>
				<DocumentationDivider />
				<p className="label-text">Retrieve a certain record list</p>
				<span className="yellow-text">GET</span>&nbsp;/recordList
				<br /><br />
				<p className="label-text">Example response:</p>
				<CodeBox width="690px">
					[{'{'}"id":"abc","name":"Ken"{'}'},{'{'}"id":"def","name":"Scott"{'}'}]
				</CodeBox>
				<DocumentationDivider />
				<p className="label-text">Retrieve a certain record</p>
				<span className="yellow-text">GET</span>&nbsp;/recordList/recordID
				<br /><br />
				<p className="label-text">Example response:</p>
				<CodeBox width="690px">
					{'{'}"id":"abc","name":"Ken"{'}'}
				</CodeBox>
				<DocumentationDivider />
				<p className="label-text">Create a record</p>
				<span className="yellow-text">POST</span>&nbsp;/recordList (data dictionary as body)
				<br /><br />
				<p className="label-text">
					Responds with the newly created record and an auto-generated ID
					<br /><br />
					Example response:
				</p>
				<CodeBox width="690px">
					{'{'}"id":"abc","name":"Ken"{'}'}
				</CodeBox>
				<DocumentationDivider />
				<p className="label-text">Replace a record</p>
				<span className="yellow-text">PUT</span>&nbsp;/recordList/recordID (data dictionary as body)
				<br /><br />
				<p className="label-text">
					Responds with the newly updated record
					<br /><br />
					Example response:
				</p>
				<CodeBox width="690px">
					{'{'}"id":"abc","name":"Ken"{'}'}
				</CodeBox>
				<DocumentationDivider />
				<p className="label-text">Update some properties of a record</p>
				<span className="yellow-text">PATCH</span>&nbsp;/recordList/recordID (data dictionary as body)
				<br /><br />
				<p className="label-text">
					Responds with the newly updated record
					<br /><br />
					Example response:
				</p>
				<CodeBox width="690px">
					{'{'}"id":"abc","name":"Ken"{'}'}
				</CodeBox>
				<DocumentationDivider />
				<p className="label-text">Delete project</p>
				<span className="yellow-text">DELETE</span>&nbsp;/
				<br /><br />
				<p className="label-text">Be careful! This action cannot be undone.</p>
				<DocumentationDivider />
				<p className="label-text">Delete record list</p>
				<span className="yellow-text">DELETE</span>&nbsp;/recordList
				<br /><br />
				<p className="label-text">Be careful! This action cannot be undone.</p>
				<DocumentationDivider />
				<p className="label-text">Delete record</p>
				<span className="yellow-text">DELETE</span>&nbsp;/recordList/recordID
				<br /><br />
				<p className="label-text">Be careful! This action cannot be undone.</p>
			</>
		)
	}
}

const mapStateToProps = ({ projectId }: AppState) => ({ projectId })

export default connect(mapStateToProps)(RestEndpointsDocumentation)
