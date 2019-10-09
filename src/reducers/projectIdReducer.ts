import uuid from 'uuid/v4'

import ActionType from '../ActionType'
import { ReloadProjectIdAction } from '../action-types'

export default (projectId: string = uuid(), action: ReloadProjectIdAction): string => {
	switch (action.type) {
		case ActionType.ReloadProjectId:
			return uuid()
		default:
			return projectId
	}
}