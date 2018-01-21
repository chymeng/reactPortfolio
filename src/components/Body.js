import React, { Component } from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="bodyContent">
          <div className="bodyImage">
            <img src="https://image.ibb.co/ehP126/image_2.jpg" alt="Me" />
          </div>
          <div className="bodyDescription">
            <p>
              My name is Chy. Front-end web developer based in Melbourne,
              Australia.
              <TypistLoop interval={1000}>
                {[
                  "I like to code!",
                  "Sucker for romantic movies",
                  "Love japanese food"
                ].map(text => (
                  <Typist key={text} startDelay={500}>
                    {text}
                  </Typist>
                ))}
              </TypistLoop>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
