import React from 'react'
import { connect } from 'react-redux'

import { AppState } from '../reducers'

class Documentation extends React.Component {
	render() {
		return <>Documentation</>
	}
}

const mapStateToProps = ({ projectId }: AppState) => ({ projectId })

export default connect(mapStateToProps)(Documentation)