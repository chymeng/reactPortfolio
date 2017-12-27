import React, { Component } from 'react'

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="navOptions">
					<ul>
						<li>About me</li>
						<li>Projects</li>
						<li>Contact me</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Header
