import React, { Component } from 'react'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import melbourne from '../images/melbourne.jpg'

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="bodyDescription">
          <h2>
            My name is Chy. Junior Developer based in Melbourne, Australia.
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
          <img src={melbourne} alt="Melbourne" />
        </div>
      </div>
    )
  }
}

export default Body
