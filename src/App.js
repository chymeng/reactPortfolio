import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Favicon from 'react-favicon'
import '../src/css/App.css'
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
import Blog from './components/Blog'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Favicon url="https://image.ibb.co/eAxkhc/favicon_32x32.png" />
          <Header />
          <Route exact path="/" component={Body} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/terminalproject" component={Terminal} />
          <Route exact path="/tantomanagement" component={Tanto} />
          <Route exact path="/cookbook" component={Cookbook} />
          <Route exact path="/solemate" component={Solemate} />
          <Route exact path="/blog" component={Blog} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
