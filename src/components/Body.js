import React, { Component } from 'react'

class Body extends Component {
	render() {
		return (
			<div className="body">
				<div className="bodyContent">
					<div className="bodyImage">
						<img
							src="https://image.ibb.co/ehP126/image_2.jpg"
							alt="Chy profile photo"
						/>
					</div>
					<div className="bodyDescription">
						<p>
							My name is Chy Meng. Front-end web developer based in Melbourne,
							Australia.
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Body
