import { combineReducers } from 'redux'

import projectIdReducer from './projectIdReducer'

export default combineReducers({
	projectId: projectIdReducer
})