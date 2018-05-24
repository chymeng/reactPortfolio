import React, { Component } from 'react'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import melbourne from '../images/melbourne.jpg'
import { Transition } from 'react-transition-group'

const duration = 300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

const Fade = ({ in: inProp, sentence: sentence }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        <h2>{sentence}</h2>
      </div>
    )}
  </Transition>
)

class Body extends Component {
  state = { show: false }

  handleToggle() {
    this.setState(({ show }) => ({
      show: !show
    }))
  }
  render() {
    const { show } = this.state
    return (
      <div className="body">
        <div className="bodyDescription">
          <div>
            <button onClick={() => this.handleToggle()}>Click to toggle</button>
            <div>
              <Fade in={!!show} sentence="test" />
            </div>
          </div>
          <h2>My name is Chy.</h2>
          {/* <h2>Junior Developer based in Melbourne, Australia.</h2> */}
          {/* <h2>
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
          </h2> */}
        </div>
        {/* <div className="heroImage">
          <img src={melbourne} alt="Melbourne" />
        </div> */}
      </div>
    )
  }
}

export default Body
