import React, { Component } from 'react'

class Solemate extends Component {
  render() {
    return (
      <div className="solemate">
        <div className="solemateHeading">
          <h1>Solemate</h1>
        </div>
        <div className="solemateContent">
          <div className="solemateBlock">
            <img
              src="https://image.ibb.co/ddTPMH/pjimage_1.jpg"
              alt="Screenshot of Solemate application"
            />
          </div>
          <div className="solemateDescription">
            <p>
              We were asked to create a two-sided marketplace. I have a passion
              for sneaker/shoes so I decided to create a market primarily for
              shoes where it could be for either new or secondhand. The main
              features of the application included creating posts, communicating
              with users in regards to specific shoes, commenting on shoes and
              adding shoes to a wishlist. You can find all the documentation in
              the Github readme below.
            </p>
            <p className="solemateGit">
              <a
                className="link"
                href="https://github.com/chymeng/Solemate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projects Code <i className="fab fa-github" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Solemate
