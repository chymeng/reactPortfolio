import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contactHeading">
          <h1>Say hi</h1>
        </div>
        <div className="contactOptions">
          <p>Feel free to contact me using one of these outlets</p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/chy.meng.7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" aria-hidden="true" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/chy-meng-6323b8a7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:chymeng24@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope" aria-hidden="true" /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contact
