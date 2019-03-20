import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
		const { cardImg, name } = this.props;
		return (
			<div className="card-base">
				{/* <!-- Base of the card --> */}
				<div className="card-header">
					{/* <!-- Header --> */}
					<h1>Type</h1>
					<div>
						<div>
							<p className="alignleft">{name}</p>
							<p className="alignright">HP</p>
							<img
								src="https://image.ibb.co/nhYAf6/purple_icon.png"
								alt="symbol"
								className="image-right"
							/>
						</div>
					</div>
				</div>
				{/* <!-- Pokemon image here --> */}
				<div>
					<img src={cardImg} alt="pokemon" className="image-big" />
				</div>
				{/* <!-- Stats banner here --> */}
				<div className="banner">
					<center>
						<p>name and weight</p>
					</center>
				</div>
				<img
					src="https://image.ibb.co/jcMADR/foot.png"
					alt="foot"
					className="foot"
				/>
				<div className="inner-container">
					<div className="description">
						<p className="main-text">main text</p>
						<hr />
						<p className="main-text">Sub text</p>
					</div>
					<div>
						<img
							src="https://image.ibb.co/nhYAf6/purple_icon.png"
							alt="symbol"
							className="image-des1"
						/>
						<img
							src="https://image.ibb.co/nhYAf6/purple_icon.png"
							alt="symbol"
							className="image-des2"
						/>
						<img
							src="https://image.ibb.co/nhYAf6/purple_icon.png"
							alt="symbol"
							className="image-des3"
						/>
					</div>
					<p className="copyright">
						<strong>Illus. Ken Sugimori</strong>&nbsp; &copy;1995, 96, 98
						Nintendo, Creatures, GAMEFREAK. &copy;1999 Wizards.&nbsp;
						<strong>32/64&#8226;</strong>
					</p>
				</div>
			</div>
		);
	}
}

export default Card;
