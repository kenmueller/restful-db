import ActionType from '../ActionType'
import { ReloadProjectIdAction } from '../types/actions'

export const reloadProjectId = (): ReloadProjectIdAction => ({
	type: ActionType.ReloadProjectId
})
