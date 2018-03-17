import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import solemate from '../images/solemate.jpeg'
import terminal from '../images/terminal.png'
import tanto from '../images/tanto.jpg'
import cookbook from '../images/cookbook.png'

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
                  <img src={terminal} alt="Terminal Project Preview" />
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
              <Link to="/solemate">
                <div className="projectThumb">
                  <img src={solemate} alt="Two sided marketplace Preview" />
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
                  <img src={tanto} alt="Tanto management system Preview" />
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

          <li className="flex-item flex4">
            <div className="projectContainer">
              <Link to="/cookbook">
                <div className="projectThumb">
                  <img src={cookbook} alt="My Cookbook preview" />
                </div>
                <div className="projectHeading">
                  <h2>My Cookbook</h2>
                </div>
                <div className="projectDescription">
                  <p>
                    A cooking social media where users can share recipes and
                    build a community
                  </p>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Projects
