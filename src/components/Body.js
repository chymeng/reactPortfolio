import React, { Component } from 'react'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import melbourne from '../images/melbourne.jpg'
import { CSSTransition } from 'react-transition-group'

class Body extends Component {
  state = {
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    i1: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ p1: true })
    }, 2000),
      setTimeout(() => {
        this.setState({ p2: true })
      }, 2500),
      setTimeout(() => {
        this.setState({ p3: true })
      }, 3000),
      setTimeout(() => {
        this.setState({ p4: true })
      }, 3500),
      setTimeout(() => {
        this.setState({ i1: true })
      }, 2000)
  }

  render() {
    const { p1, p2, p3, p4, i1 } = this.state
    return (
      <div className="body">
        <div className="bodyDescription">
          <h2 className={this.state.p1 ? 'slideDown' : null}>Hi</h2>
          <h2 className={this.state.p2 ? 'slideDown' : null}>My name is Chy</h2>
          <h2 className={this.state.p3 ? 'slideDown' : null}>
            Junior Developer based in Melbourne, Australia.
          </h2>
          <h2 className={this.state.p4 ? 'slideDown' : null}>
            <TypistLoop interval={1000}>
              {[
                'I like to code!',
                'Love playing sports',
                'Love japanese food',
                'Night owl'
              ].map(text => (
                <Typist key={text} startDelay={500}>
                  {text}
                </Typist>
              ))}
            </TypistLoop>
          </h2>
        </div>
        <div className="heroImage">
          <img
            src={melbourne}
            alt="Melbourne"
            className={this.state.i1 ? 'slideDown' : null}
          />
        </div>
      </div>
    )
  }
}

export default Body
