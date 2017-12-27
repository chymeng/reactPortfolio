import React, { Component } from 'react'
import '../src/css/App.css'
import '../src/css/Header.css'
import '../src/css/Body.css'
import '../src/css/Footer.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />

				<Body />

				<Footer />
			</div>
		)
	}
}

export default App
