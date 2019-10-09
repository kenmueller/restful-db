import { Action } from 'redux'
import uuid from 'uuid/v4'

import ActionType from '../ActionType'

export default (projectId: string = uuid(), action: Action<ActionType>): string => {
	switch (action.type) {
		case ActionType.ProjectIdReload:
			return uuid()
		default:
			return projectId
	}
}