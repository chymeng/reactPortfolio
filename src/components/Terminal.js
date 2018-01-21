import React, { Component } from "react";

class Terminal extends Component {
  render() {
    return (
      <div className="terminal">
        <div className="terminalHeading">
          <h1>Terminal Application</h1>
        </div>
        <div className="terminalContent">
          <div className="terminalblock">
            <img
              src="https://image.ibb.co/nMWhzw/project.png"
              alt="Screenshot of terminal application"
            />
          </div>
          <div className="terminalblock">
            <h3>Digital Personal Trainer</h3>
            <p>
              We were asked to create a command line application in groups where
              a problem was identified and a solution was presented in the
              terminal. Our group decided to make an application that would act
              as a digital personal trainer and could assist the user in
              reaching their goals in the gym. The applications main features
              were suggesting exercises, keeping track of progress, give audio
              encouragement, update workout plans dependant on results but
              mainly help the user save money whilst also achieving their
              ultimate goal.
            </p>
          </div>
          <div className="terminalblock">
            <h3>Planning</h3>
            <p>
              We spent at least a day planning out and working out how the
              application would run first. This included mind mapping and flow
              charts to see the flow of the application and what needed to be
              accomplished by each team member.
            </p>
          </div>
          <div className="terminalblock">
            <img
              src="https://image.ibb.co/et1RRb/project_1.png"
              alt="Whiteboard planning phase"
            />
          </div>
          <div className="terminalblock">
            {" "}
            <img
              src="https://image.ibb.co/mdC5Kw/project_2.png"
              alt="Workflow diagram for program"
            />
          </div>
          <div className="terminalblock">
            <h3>Struggles</h3>
            <p>
              Our team learnt a lot working together for the first time on an
              application. One of the main struggles was our different knowledge
              levels and since we had only been coding for a week and half,
              there was a steep learning curve on that features we did want to
              implement on the application. We also struggled piecing all our
              components together since we had not learnt how to use Github yet
              and everyone had different versions of the application and piecing
              everything together was a big a hassle.
            </p>
          </div>
          <div className="terminalblock">
            <p>
              The result was a fully operational terminal application, and
              although not all the features we wanted to implement were put in,
              we’re all proud of the work we accomplished in such little time
              and experience we had. Go and check out the three other great
              developers I worked with.
            </p>
            <div className="terminalcode">
              <p>
                <a
                  className="link"
                  href="https://alexpalma.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alex Palma
                </a>
              </p>
              <p>
                <a
                  className="link"
                  href="https://www.christengarcia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Christen Garcia
                </a>
              </p>
              <p>
                <a
                  className="link"
                  href="https://isabellegaboc.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Isabelle Gaboc
                </a>
              </p>
              <p>
                <a className="link" href="https://github.com/Chy24/digital_pt">
                  Projects Code <i class="fa fa-github" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
          <div className="terminalblock">
            <img
              src="https://image.ibb.co/hTOCzw/project_3.jpg"
              alt="The group"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Terminal;
