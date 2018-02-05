import React, { Component } from 'react'

class Terminal extends Component {
  render() {
    return (
      <div className="terminal">
        <div className="terminalHeading">
          <h1>Terminal Application</h1>
        </div>
        <div className="terminalContent">
          <div className="terminalBlock">
            <img
              src="https://image.ibb.co/jmbC9R/pjimage.jpg"
              alt="Screenshot of terminal application"
            />
          </div>
          <div className="terminalDescription">
            <p>
              In this project, we were asked to create a command line
              application where a problem was identified between all group
              members and a solution be made in the terminal. Our group decided
              to make an application that would act as a digital personal
              trainer and could assist the user in reaching their goals in the
              gym. The applications main features were suggesting exercises,
              keeping track of progress, give audio encouragement, update
              workout plans dependant on results but mainly help the user save
              money while also achieving their fitness goals.
            </p>
            <p className="terminalGit">
              <a
                className="link"
                href="https://github.com/Chy24/digital_pt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projects Code <i className="fa fa-github" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Terminal
