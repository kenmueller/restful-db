import React from 'react'
import * as Bulma from 'react-bulma-components'

import NavbarLogo from './NavbarLogo'
import NavbarMenu from './NavbarMenu'

export default class extends React.Component {
	render = (): JSX.Element => (
		<Bulma.Hero.Head>
			<Bulma.Navbar>
				<Bulma.Container>
					<NavbarLogo />
					{this.props.children}
					<NavbarMenu />
				</Bulma.Container>
			</Bulma.Navbar>
		</Bulma.Hero.Head>
	)
}
