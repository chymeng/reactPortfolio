import React, { Component } from 'react'
import Favicon from 'react-favicon'
import favicon from './images/favicon.png'
import '../src/styles/App.css'
import Header from './components/Header'
import List from './components/List'
import { projects, resume, work } from './constants/Text'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Favicon src={favicon} />
        <Header />
        <List title={'work'} array={work} />
        <List title={'projects'} array={projects} />
        <List title={'resume'} array={resume} />
      </div>
    )
  }
}

export default App
