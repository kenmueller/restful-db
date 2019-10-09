import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Bulma from 'react-bulma-components'

import { HomeProps } from '../types/props'
import { AppState } from '../reducers'
import { reloadProjectId } from '../actions'
import CopyableCodeBox from './CopyableCodeBox'

import '../scss/Home.scss'
import logo from '../images/logo.png'
import compactLogo from '../images/compact-logo.png'

class Home extends React.Component<HomeProps> {
	render() {
		return (
			<>
				<Bulma.Hero size="medium" textWeight="bold" className="home-hero">
					<Bulma.Hero.Head>
						<Bulma.Navbar>
							<Bulma.Container>
								<Link to="/">
									<img
										src={compactLogo}
										alt="Logo"
										className="navbar-logo"
									/>
								</Link>
								<Bulma.Navbar.Menu>
									<div className="navbar-end">
										<Bulma.Tabs align="right" className="navbar-right-tabs">
											<ul>
												<li><Link to="/">Home</Link></li>
												<li><Link to="/docs">Documentation</Link></li>
											</ul>
										</Bulma.Tabs>
									</div>
								</Bulma.Navbar.Menu>
							</Bulma.Container>
						</Bulma.Navbar>
					</Bulma.Hero.Head>
					<Bulma.Hero.Body>
						<Bulma.Content textAlignment="centered">
							<img
								src={logo}
								alt="Logo"
								className="main-logo"
							/>
							<h3 className="subtitle main-text-subtitle light-color">
								Zero-setup, super fast database
							</h3>
							<div className="main-packages">
								<h1 className="title light-color">NPM</h1>
								<CopyableCodeBox
									text="npm i restful-db"
									width="250px"
								/>
								<h1 className="title light-color">Browser</h1>
								<CopyableCodeBox
									text={'<script src="https://wzrd.in/standalone/restful-db"></script>'}
									width="635px"
								/>
							</div>
						</Bulma.Content>
					</Bulma.Hero.Body>
				</Bulma.Hero>
				<Bulma.Section>
					<Bulma.Container>
						<Bulma.Columns>
							<Bulma.Columns.Column size={3}>
								<aside className="is-medium menu">
									<p className="menu-label">Documents</p>
									<Bulma.Menu.List>

									</Bulma.Menu.List>
								</aside>
							</Bulma.Columns.Column>
						</Bulma.Columns>
					</Bulma.Container>
				</Bulma.Section>
					
					{/* <li class="is-right"><a href="#const" class="is-active"><i class="fab fa-css3-alt"></i> CSS</a></li>
					<li><a href="#let" class="is-active"><i class="fab fa-js"></i> JS</a></li>
					<li><a href="#let" class="is-active"><i class="fab fa-html5"></i> HTML</a></li>
					</ul>
					<p class="menu-label">
					More to read...
					</p>
					<ul class="menu-list">
					<li><span class="tag is-white is-medium">Lorem</span></li>
					<li><span class="tag is-white is-medium">Ipsum</span></li>
					<li><span class="tag is-white is-medium">Dolor</span></li>
					<li><span class="tag is-white is-medium">Animi</span></li>
					<li><span class="tag is-white is-medium">Eximi</span></li>
					<li><span class="tag is-white is-medium">Nullius</span></li>
					<li><span class="tag is-white is-medium">Oxipi</span></li>
					<li><span class="tag is-white is-medium">Vultus</span></li>
					<li><span class="tag is-white is-medium">Voluptatis</span></li>
					<li><span class="tag is-white is-medium">Exomarphis</span></li>
					<li><span class="tag is-white is-medium">Finimi</span></li>
					<li><span class="tag is-white is-medium">Aenigma</span></li>
					<li><span class="tag is-white is-medium">Arkham</span></li>
					<li><span class="tag is-white is-medium">Blue</span></li>
					<li><span class="tag is-white is-medium">Medium</span></li>
					</ul>
					</aside>
					</div>
					<div class="column is-9">
					<div class="content is-medium">
					<h3 class="title is-3">Snippets ¯\_(ツ)_/¯</h3>
					<div class="box">
					<h4 id="const" class="title is-3">const</h4>
					<article class="message is-primary">
					<span class="icon has-text-primary">
					<i class="fab fa-js"></i>
					</span>
					<div class="message-body">
					Block-scoped. Cannot be re-assigned. Not immutable.
					</div>
					</article>
					<pre><code class="language-javascript">const test = 'test';</code></pre>
					</div>
					<div class="box">
					<h4 id="let" class="title is-3">let</h4>
					<article class="message is-primary">
					<span class="icon has-text-primary">
					<i class="fas fa-info-circle"></i>
					</span>
					<div class="message-body">
					Block-scoped. Can be re-assigned.
					</div>
					</article>
					<pre><code class="language-javascript">let i = 0;</code></pre>
					</div>
					<h3 class="title is-3">More to Come...</h3>
					<div class="box">
					<h4 id="lorem" class="title is-4">More to come...</h4>
					<article class="message is-primary">
					<span class="icon has-text-primary">
					<i class="fas fa-info-circle"></i>
					</span>
					<div class="message-body">
					Lorem ipsum dolor sit amet, mea ne viderer veritus menandri, id scaevola gloriatur instructior sit.
					</div>
					</article>
					<pre><code class="language-javascript">let i = 0;</code></pre>
					</div>
					</div>
					</div>
					</div>
					</div>
					</section>
					<footer class="footer">
					<section class="section">
					<div class="container">
					<div class="columns is-multiline">
					<div class="column is-one-third">
					<article class="notification media has-background-white">
					<figure class="media-left">
					<span class="icon">
					<i class="has-text-warning fas fa-columns fa-lg"></i>
					</span>
					</figure>
					<div class="media-content">
					<div class="content">
					<h1 class="title is-size-4">Columns</h1>
					<p class="is-size-5 subtitle">
					The power of <strong>Flexbox</strong> in a simple interface
					</p>
					</div>
					</div>
					</article>
					</div>
					<div class="column is-one-third">
					<article class="notification has-background-white media">
					<figure class="media-left">
					<span class="icon has-text-info">
					<i class="fab fa-lg fa-wpforms"></i>
					</span>
					</figure>
					<div class="media-content">
					<div class="content">
					<h1 class="title is-size-4">Form</h1>
					<p class="is-size-5 subtitle">
					The indispensable <strong>form controls</strong>, designed for maximum clarity
					</p>
					</div>
					</div>
					</article>
					</div>
					<div class="column is-one-third">
					<article class="notification has-background-white media">
					<figure class="media-left">
					<span class="icon has-text-danger">
					<i class="fas fa-lg fa-cubes"></i>
					</span>
					</figure>
					<div class="media-content">
					<div class="content">
					<h1 class="title is-size-4">Components</h1>
					<p class="is-size-5 subtitle">
					Advanced multi-part components with lots of possibilities
					</p>
					</div>
					</div>
					</article>
					</div>
					<div class="column is-one-third">
					<article class="notification has-background-white media">
					<figure class="media-left">
					<span class="icon has-text-grey">
					<i class="fas fa-lg fa-cogs"></i>
					</span>
					</figure>
					<div class="media-content">
					<div class="content">
					<h1 class="title is-size-4">Modifiers</h1>
					<p class="is-size-5 subtitle">
					An <strong>easy-to-read</strong> naming system designed for humans
					</p>
					</div>
					</div>
					</article>
					</div>
					<div class="column is-one-third">
					<article class="notification has-background-white media">
					<figure class="media-left">
					<span class="icon has-text-primary">
					<i class="fas fa-lg fa-warehouse"></i>
					</span>
					</figure>
					<div class="media-content">
					<div class="content">
					<h1 class="title is-size-4">Layout</h1>
					<p class="is-size-5 subtitle">
					Design the <strong>structure</strong> of your webpage with these CSS classes
					</p>
					</div>
					</div>
					</article>
					</div>
					<div class="column is-one-third">
					<article class="notification has-background-white media">
					<figure class="media-left">
					<span class="icon has-text-danger">
					<i class="fas fa-lg fa-cube"></i>
					</span>
					</figure>
					<div class="media-content">
					<div class="content">
					<h1 class="title is-size-4">Elements</h1>
					<p class="is-size-5 subtitle">
					Essential interface elements that only require a <strong>single CSS class</strong>
					</p>
					</div>
					</div>
					</article>
					</div>
					</div>
					</div>
					</section>
					<hr>
					<div class="columns is-mobile is-centered">
					<div class="field is-grouped is-grouped-multiline">
					<div class="control">
					<div class="tags has-addons"><a class="tag is-link" href="https://github.com/dansup/bulma-templates">Bulma Templates</a>
					<span class="tag is-info">MIT license</span>
					</div>
					</div>
					<div class="control">
					<div class="tags has-addons">
					<span class="tag is-dark">based on a pen</span>
					<span class="tag has-addons is-warning"><a href="https://codepen.io/melanieseltzer/pen/odOXWM"><i class="fab fa-lg fa-codepen"></i></a></span>
					</div>
					</div>
					</div>
					</div>

					</footer> */}
			</>
		)
	}
}

const mapStateToProps = ({ projectId }: AppState) => ({ projectId })

export default connect(mapStateToProps, { reloadProjectId })(Home)