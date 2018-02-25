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
              My name is Chy, a former accountant aspiring to become a
              Developer. I have just completed an intensive web development
              bootcamp at Coder Academy and can't wait to join the tech industry
              where I can further expand my knowledge. The current technologies
              that I have experience in include
            </p>
            <div className="aboutTech">
              <div className="aboutTechFront">
                <h3>Front-end Technologies</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SASS/SCSS</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>UI/UX</li>
                </ul>
              </div>
              <div className="aboutTechEnd">
                <h3>Back-end Technologies</h3>
                <ul>
                  <li>Ruby</li>
                  <li>Ruby on Rails</li>
                  <li>SQL</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Node.js</li>
                </ul>
              </div>
            </div>
            <p>
              I am enthusiastic and passionate about the challenges that Web Dev
              provides and the excitement that comes from learning something new
              everyday. I like writing elegant and efficient code, care about
              user experience and the little details that make the difference.
            </p>
            <p>
              You can download my{' '}
              <b className="aboutLink">
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/document/d/1c8Z2TrOlyta_JUkGm5dbFswwYH79kZIgkjLnrAc3ZH8/edit?usp=sharing"
                >
                  resume
                </a>
              </b>{' '}
              or check out my{' '}
              <b className="aboutLink">
                <a
                  target="blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/chy-meng-6323b8a7/"
                >
                  LinkedIn
                </a>
              </b>{' '}
              in here.{' '}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
