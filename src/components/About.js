import React, { Component } from "react";

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
              My name is Chy, former accountant looking to become a front-end
              web developer. I’m currently studying at Coder Academy where I’m
              learning skills such as HTML 5, CSS3, SASS/SCSS, Ruby, Ruby on
              Rails, React, SQL, JavaScript, Express.js and many others. Check
              out my resume and Linkedin to see my experiences.
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
    );
  }
}

export default About;
