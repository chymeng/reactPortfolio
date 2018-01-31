import React, { Component } from "react";
import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="projectsHeading">
          <h1>Projects</h1>
        </div>

        <ul className="projectsList">
          <li className="flex-item flex1">
            <div className="projectContainer">
              <Link to="/terminalproject">
                <div className="projectThumb">
                  <img
                    src="https://image.ibb.co/nMWhzw/project.png"
                    alt="Terminal Project Preview"
                  />
                </div>
                <div className="projectHeading">
                  <h2>Terminal application</h2>
                </div>
                <div className="projectDescription">
                  <p>
                    We built a digital personal trainer through our Terminal.
                  </p>
                </div>
              </Link>
            </div>
          </li>

          <li className="flex-item flex2">
            <div className="projectContainer">
              <Link to="/twosidedmarket">
                <div className="projectThumb">
                  <img
                    src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7d1df3fbecb8923c40cd429b2add590&auto=format&fit=crop&w=1500&q=80"
                    alt="Two sided marketplace Preview"
                  />
                </div>
                <div className="projectHeading">
                  <h2>Solemate</h2>
                </div>
                <div className="projectDescription">
                  <p>Two sided marketplace for shoes</p>
                </div>
              </Link>
            </div>
          </li>

          <li className="flex-item flex3">
            <div className="projectContainer">
              <Link to="/tantomanagement">
                <div className="projectThumb">
                  <img
                    src="https://cdn.concreteplayground.com/content/uploads/2016/10/tanto-3.jpg"
                    alt="Tanto management system Preview"
                  />
                </div>
                <div className="projectHeading">
                  <h2>Tanto Management System</h2>
                </div>
                <div className="projectDescription">
                  <p>
                    Stock management system used to keep account of inventory
                    and generate reports for business purposes
                  </p>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
