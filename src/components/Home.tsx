import React from 'react'
import { connect } from 'react-redux'

import { HomeProps } from '../prop-types'
import { AppState } from '../reducers'
import { reloadProjectId } from '../actions'

class Home extends React.Component<HomeProps> {
	render() {
		return (
			<>
				{this.props.projectId}
			</>
		)
	}
}

const mapStateToProps = ({ projectId }: AppState) => ({ projectId })

export default connect(mapStateToProps, { reloadProjectId })(Home)