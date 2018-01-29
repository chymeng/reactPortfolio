import React, { Component } from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="bodyDescription">
          <p>
            My name is Chy. Junior Web Developer based in Melbourne, Australia.
            <TypistLoop interval={1000}>
              {[
                "I like to code!",
                "Love playing sports",
                "Love japanese food",
                "Night owl"
              ].map(text => (
                <Typist key={text} startDelay={500}>
                  {text}
                </Typist>
              ))}
            </TypistLoop>
          </p>
        </div>
        <div className="heroImage">
          <img
            src="https://image.ibb.co/b6oS3b/15c_Lewis_Brownlie_Melb_that_Might_Have_Been_2016_Co_M_detail_21.jpg"
            alt="Melbourne"
          />
        </div>
      </div>
    );
  }
}

export default Body;
