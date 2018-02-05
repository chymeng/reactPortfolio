import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="aboutHeading">
          <h1>About</h1>
        </div>
        <div className="aboutContainer">
          <div className="aboutImage">
            <img src="https://image.ibb.co/jMGi4w/image.jpg" alt="Me" />
          </div>
          <div className="aboutContent">
            <p>
              My name is Chy, former accountant looking to become a Developer.
              I’m currently studying at Coder Academy where I’m learning skills
              such as HTML 5, CSS3, SASS/SCSS, Ruby, Ruby on Rails, React, SQL,
              JavaScript, Express.js and many others. Check out my{' '}
              <b className="aboutLink">
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/document/d/1c8Z2TrOlyta_JUkGm5dbFswwYH79kZIgkjLnrAc3ZH8/edit?usp=sharing"
                >
                  resume
                </a>
              </b>{' '}
              and{' '}
              <b className="aboutLink">
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/chy-meng-6323b8a7/"
                >
                  LinkedIn
                </a>
              </b>{' '}
              to see my experiences.
            </p>
            <p>
              I am enthusiastic and passionate about the challenges that Web Dev
              provides and the excitement that comes from learning something new
              everyday. I like writing elegant and efficient code, care about
              user experience and the little details that make the difference.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
