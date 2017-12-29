import React, { Component, Fragment } from 'react'
import '../src/css/App.css'
import '../src/css/Header.css'
import '../src/css/Body.css'
import '../src/css/Footer.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

class App extends Component {
	render() {
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
							</Fragment>
						)}
					/>
				</div>
			</Router>
		)
	}
}

export default App
