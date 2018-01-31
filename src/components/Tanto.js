import React, { Component } from "react";

class Tanto extends Component {
  render() {
    return (
      <div className="tanto">
        <div className="terminalHeading">
          <h1>Tanto Management System</h1>
        </div>
        <div className="tantoContent">
          <div className="tantoBlock">
            <img
              src="https://image.ibb.co/fkKYW6/Adobe_Spark.jpg"
              alt="Screenshot of terminal application"
            />
          </div>
          <div className="tantoDescription">
            <p>
              For our final project, we had to find a client that we could use
              our programming skills to help them in their day to day
              activities. We were lucky enough that one of our group members
              Tomomi knew the owner of a Japanese Knife store. He had currently
              recorded all his sales, customer interactions, inventory lists,
              creating graphs and many others in excel which required time.
              After meeting with the client, we had all concluded that we would
              make an application that would automate and save time.
              <br />
              You can find all the documentation in the Github readme below.
            </p>
            <p className="tantoGit">
              <a
                className="link"
                href="https://github.com/chymeng/major-project-term3"
                target="_blank"
              >
                Projects Code <i className="fa fa-github" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tanto;
