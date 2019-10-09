import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

import { CopyableCodeBoxProps } from '../types/props'

import '../scss/CopyableCodeBox.scss'

export default class extends React.Component<CopyableCodeBoxProps> {
	static defaultProps = {
		textColor: 'white',
		backgroundColor: '#1e1e1e',
		borderWidth: 1,
		borderColor: '#ecf0f3',
		copyButtonTextColor: '#ffdd57',
		copyButtonBackgroundColor: 'transparent',
		width: '100%',
		centered: false
	}

	render() {
		const {
			text,
			textColor,
			backgroundColor,
			borderWidth,
			borderColor,
			copyButtonTextColor,
			copyButtonBackgroundColor,
			width,
			centered
		} = this.props
		const horizontalMargin = centered ? 'auto' : ''
		return (
			<pre
				className="copyable-code-box"
				style={{
					color: textColor,
					backgroundColor,
					border: `${borderWidth}px solid ${borderColor}`,
					width,
					marginLeft: horizontalMargin,
					marginRight: horizontalMargin
				}}
			>
				<code>{text}</code>
				<CopyToClipboard text={text}>
					<code
						className="copy-button"
						style={{
							color: copyButtonTextColor,
							backgroundColor: copyButtonBackgroundColor
						}}
					>
						copy
					</code>
				</CopyToClipboard>
			</pre>
		)
	}
}