import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Projects extends Component {
	render() {
		return (
			<div className="projects">
				<div className="projectsHeading">
					<h1>Projects</h1>
				</div>
				<div className="projectsList">
					<ul>
						<li className="flex-item flex1">
							<Link to="/terminalproject">
								<img src="https://image.ibb.co/nMWhzw/project.png" />
								<h2>Terminal application</h2>
							</Link>
						</li>
						<li className="flex-item flex2">
							<img src="https://c.s-microsoft.com/en-my/CMSImages/Image_ProjectIgnite_509x190.jpg?version=5ee5f592-37f8-4790-133e-3cb200f6d2c3" />
						</li>
						<li className="flex-item flex3">
							<img src="https://c.s-microsoft.com/en-my/CMSImages/Image_ProjectIgnite_509x190.jpg?version=5ee5f592-37f8-4790-133e-3cb200f6d2c3" />
						</li>
						<li className="flex-item flex4">
							<img src="https://c.s-microsoft.com/en-my/CMSImages/Image_ProjectIgnite_509x190.jpg?version=5ee5f592-37f8-4790-133e-3cb200f6d2c3" />
						</li>
						<li className="flex-item flex5">
							<img src="https://c.s-microsoft.com/en-my/CMSImages/Image_ProjectIgnite_509x190.jpg?version=5ee5f592-37f8-4790-133e-3cb200f6d2c3" />
						</li>
						<li className="flex-item flex6">
							<img src="https://c.s-microsoft.com/en-my/CMSImages/Image_ProjectIgnite_509x190.jpg?version=5ee5f592-37f8-4790-133e-3cb200f6d2c3" />
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Projects
