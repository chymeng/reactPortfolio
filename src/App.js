import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Favicon from 'react-favicon'
import favicon from './images/favicon.png'
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
      <div className="App">
        <Favicon src={favicon} />
        <Header />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/terminalproject" component={Terminal} />
          <Route exact path="/tantomanagement" component={Tanto} />
          <Route exact path="/cookbook" component={Cookbook} />
          <Route exact path="/solemate" component={Solemate} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
