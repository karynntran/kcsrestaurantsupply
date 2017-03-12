import React, { Component } from 'react';

// import Products from './components/products';


class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		// this._goToActiveView = this._goToActiveView.bind(this);
	}

	// _goToActiveView(){
	// 	this.state.active ? this.setState({ active: false}) : this.setState({ active: true });
	// }

	render(){
		const products = this.props.productData.map((product) => {
			return (
				<div>{product.categoryName}</div>
			)
		});
		return (
			<div className="main section">
				{ products }
			</div>
		)
		
	}

};

export default Main;