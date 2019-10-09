import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import * as serviceWorker from './serviceWorker'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

ReactDOM.render((
	<Provider store={createStore(reducers, composeEnhancers())}>
		<App />
	</Provider>
), document.getElementById('root'))

serviceWorker.register()