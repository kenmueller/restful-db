import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import { DEFAULT_DOCUMENTATION_PATH } from '../constants'
import history from '../history'
import Home from './Home'
import Documentation from './Documentation'

import 'bulma'

export default class extends React.Component {
	render = (): JSX.Element => (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/docs/:section/:document" component={Documentation} />
				<Redirect exact from="/docs" to={DEFAULT_DOCUMENTATION_PATH} />
			</Switch>
		</Router>
	)
}
