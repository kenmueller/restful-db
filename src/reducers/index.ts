import { combineReducers } from 'redux'

import projectIdReducer from './projectIdReducer'

const reducers = combineReducers({
	projectId: projectIdReducer
})

export default reducers

export type AppState = ReturnType<typeof reducers>
