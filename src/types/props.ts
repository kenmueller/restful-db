import { reloadProjectId } from '../actions'

export interface HomeProps {
	projectId: string
	reloadProjectId: typeof reloadProjectId
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