export interface HomeProps {
	projectId: string
}

export interface DocumentationProps {
	projectId: string
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