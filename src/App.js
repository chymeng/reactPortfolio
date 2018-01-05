import React, { Component, Fragment } from 'react'
import '../src/css/App.css'
import '../src/css/Header.css'
import '../src/css/Body.css'
import '../src/css/Footer.css'
import '../src/css/About.css'
import '../src/css/Contact.css'
import '../src/css/Projects.css'
import '../src/css/Terminal.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Terminal from './components/Terminal'
import TransitionGroup from 'react-transition-group/TransitionGroup'

class App extends Component {
	render() {
		const firstChild = props => {
			const childrenArray = React.Children.toArray(props.children)
			return childrenArray[0] || null
		}
		return (
			<Router>
				<div className="App">
					<Route
						path="/"
						exact
						render={() => (
							<Fragment>
								<Header />
								<Body />
								<Footer />
							</Fragment>
						)}
					/>

					<Route
						path="/about"
						exact
						render={() => (
							<Fragment>
								<Header />
								<About />
								<Footer />
							</Fragment>
						)}
					/>

					<Route
						path="/projects"
						exact
						render={() => (
							<Fragment>
								<Header />
								<Projects />
								<Footer />
							</Fragment>
						)}
					/>

					<Route
						path="/contact"
						exact
						render={() => (
							<Fragment>
								<Header />
								<Contact />
								<Footer />
							</Fragment>
						)}
					/>

					<Route
						path="/terminalproject"
						exact
						render={() => (
							<Fragment>
								<Header />
								<Terminal />
								<Footer />
							</Fragment>
						)}
					/>
				</div>
			</Router>
		)
	}
}

export default App
