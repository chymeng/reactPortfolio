import React, { Component } from 'react'
import '../src/css/App.css'
import '../src/css/Header.css'
import '../src/css/Body.css'
import '../src/css/Footer.css'
import '../src/css/About.css'
import '../src/css/Contact.css'
import '../src/css/Projects.css'
import '../src/css/Terminal.css'
import '../src/css/Tanto.css'
import '../src/css/Cookbook.css'
import '../src/css/Solemate.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Terminal from './components/Terminal'
import Tanto from './components/Tanto'
import Cookbook from './components/Cookbook'
import Solemate from './components/Solemate'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Body} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/terminalproject" component={Terminal} />
          <Route exact path="/tantomanagement" component={Tanto} />
          <Route exact path="/cookbook" component={Cookbook} />
          <Route exact path="/solemate" component={Solemate} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
