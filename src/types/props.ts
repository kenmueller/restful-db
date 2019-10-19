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

export interface DocumentationMenuProps {
	currentPath: string
}

export interface DocumentationListProps {
	name: string
}

export interface DocumentationListItemProps {
	name: string
	path: string
	currentPath: string
}

export interface DocumentationHeadProps {
	name: string
}

export interface NPMInstallationDocumentationProps {
	projectId: string
}

export interface BrowserInstallationDocumentationProps {
	projectId: string
}
