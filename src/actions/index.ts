import ActionType from '../ActionType'
import { ReloadProjectIdAction } from '../action-types'

export const reloadProjectId = (): ReloadProjectIdAction => ({
	type: ActionType.ReloadProjectId
})