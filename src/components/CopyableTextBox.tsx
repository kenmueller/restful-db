import React from 'react'
import * as Bulma from 'react-bulma-components'

export default class extends React.Component<{ text: string, backgroundColor: string }> {
	static defaultProps = {
		backgroundColor: 'gray'
	}

	render() {
		const { text } = this.props
		return (
			<Bulma.Form.Input value={text} />
		)
	}
}