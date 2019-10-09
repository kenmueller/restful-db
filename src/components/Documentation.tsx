import React from 'react'
import { connect } from 'react-redux'

import { DocumentationProps } from '../types/props'
import { AppState } from '../reducers'

class Documentation extends React.Component<DocumentationProps> {
	render() {
		return <>Documentation</>
	}
}

const mapStateToProps = ({ projectId }: AppState) => ({ projectId })

export default connect(mapStateToProps)(Documentation)