import React, { Component } from 'react'
var FontAwesome = require('react-fontawesome')

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="footerContent">
					<div className="contactList">
						<ul>
							<li>
								<a href="https://github.com/chymeng" target="_blank">
									<FontAwesome
										className="githubIcon"
										name="github"
										size="10x"
										tag="i"
									/>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/chy-meng-6323b8a7/"
									target="_blank"
								>
									<FontAwesome
										className="linkedInIcon"
										name="linkedin"
										size="10x"
										tag="i"
									/>
									LinkedIn
								</a>
							</li>
							<li>
								<a href="mailto:chymeng24@gmail.com" target="_blank">
									<img
										src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/waving-hand-sign_1f44b.png"
										target="_blank"
										className="handWaveIcon"
									/>
									Say hi
								</a>
							</li>
							<li>
								<a href="#">
									<FontAwesome
										className="blogIcon"
										name="book"
										size="10x"
										tag="i"
									/>Blog
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
