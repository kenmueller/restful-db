import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'

import Home from './Home'
import Documentation from './Documentation'

export default class extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/docs" component={Documentation} />
				</Switch>
			</BrowserRouter>
		)
	}
}