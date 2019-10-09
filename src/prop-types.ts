import { reloadProjectId } from './actions'

export interface HomeProps {
	projectId: string
	reloadProjectId: typeof reloadProjectId
}