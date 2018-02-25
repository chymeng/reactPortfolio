import React, { Component } from 'react'

class Cookbook extends Component {
  render() {
    return (
      <div className="cookbook">
        <div className="cookbookHeading">
          <h1>My Cookbook</h1>
        </div>
        <div className="cookbookContent">
          <div className="cookbookBlock">
            <img
              src="https://image.ibb.co/mDWyM6/pjimage.jpg"
              alt="Screenshot of Cookbook application"
            />
          </div>
          <div className="cookbookDescription">
            <p>
              This project was a two-day hackathon where our group decided to
              make an application marketed towards foodies. The users would be
              able to post their homemade recipes and great feedback from other
              users. There are small cool features such as giving you a random
              recipe to cook and commenting on recipes. Although our time was
              limited, I felt like we came up with a very good MVP for a future
              idea.
            </p>
            <p className="cookbookGit">
              <a
                className="link"
                href="https://github.com/okichan/My-cook-book"
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

export default Cookbook
