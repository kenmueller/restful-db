export interface HomeProps {
	projectId: string
}

export interface DocumentationProps {
	projectId: string
	match: {
		params: {
			section: string
			document: string
		}
	}
}

export interface CodeBoxProps {
	copyableText?: string
	textColor: string
	backgroundColor: string
	borderWidth: number
	borderColor: string
	copyButtonTextColor: string
	copyButtonBackgroundColor: string
	width: string
	centered: boolean
}
