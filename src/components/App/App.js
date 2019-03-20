import React, { Component } from 'react';
import Card from '../Card/Card';
import './App.css';

class App extends Component {
	render() {
		let cardImg =
			'http://cdn.shopify.com/s/files/1/1158/9490/products/C000001967-PAR-ZOOM_901de3fa-7c7f-488d-a993-4e17b40d2274_800x.jpg?v=1524058404';
		let name = 'Name';

		return (
			<div className="App">
				<h1>Let's Make our Pokemon Card!</h1>
				<Card cardImg={cardImg} name={name} />
			</div>
		);
	}
}

export default App;
