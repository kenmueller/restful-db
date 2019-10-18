import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

import { CodeBoxProps } from '../types/props'

import '../scss/CodeBox.scss'

export default class extends React.Component<CodeBoxProps> {
	static defaultProps = {
		textColor: 'white',
		backgroundColor: '#1e1e1e',
		borderWidth: 1,
		borderColor: '#ecf0f3',
		copyButtonTextColor: '#ffdd57',
		copyButtonBackgroundColor: 'transparent',
		width: '100%',
		centered: false,
	}

	renderCopyButton = (): JSX.Element | null => {
		const {
			copyableText,
			copyButtonTextColor,
			copyButtonBackgroundColor
		} = this.props
		return copyableText
			? (
				<CopyToClipboard text={copyableText}>
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
			)
			: null
	}

	render = (): JSX.Element => {
		const {
			children,
			copyableText,
			textColor,
			backgroundColor,
			borderWidth,
			borderColor,
			width,
			centered
		} = this.props
		const horizontalMargin = centered ? 'auto' : undefined
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
				<code>{children || copyableText}</code>
				{this.renderCopyButton()}
			</pre>
		)
	}
}
