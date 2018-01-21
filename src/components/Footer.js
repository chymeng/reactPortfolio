import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerContent">
          <div className="contactList">
            <ul>
              <li>
                <a
                  href="https://github.com/chymeng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"
                    className="githubIcon"
                    target="_blank"
                    alt="Github icon"
                  />
                  <br />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/chy-meng-6323b8a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://media-exp2.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAANyAAAAJGRlZTNlZDQwLTk4YTItNDA1MS04MzBjLWJmNGQ5M2RmZGUxYw.png"
                    target="_blank"
                    className="linkedInIcon"
                    alt="LinkedIn Icon"
                  />
                  <br />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:chymeng24@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/waving-hand-sign_1f44b.png"
                    target="_blank"
                    className="handWaveIcon"
                    alt="Email Icon"
                  />
                  <br />
                  Say hi
                </a>
              </li>
              <li>
                <a href="google.com">
                  <img
                    src="http://www.magiccityfamilylaw.com/wp-content/uploads/2017/06/Blog-2.png"
                    target="_blank"
                    className="blogIcon"
                    alt="Blog Icon"
                  />{" "}
                  <br />Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
