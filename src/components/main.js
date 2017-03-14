import React, { Component } from 'react';

import Navigation from './navigation';


// import Products from './components/products';


class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		this._groupCategories = this._groupCategories.bind(this);

	}

	// _goToActiveView(){
	// 	this.state.active ? this.setState({ active: false}) : this.setState({ active: true });
	// }

	_groupCategories(xs, key){
		return xs.reduce(function(rv, x) {
			(rv[x[key]] = rv[x[key]] || []).push(
				x
			);
			return rv;
		}, []);
	}




	render(){

		// var keys = [];
		// for (var k in this.props.productData) keys.push(k);

		// alert(keys);

		// const products = this.props.productData.map((product, key) => {
		// 	return (
		// 		<div>{product[key][0]}</div>
		// 	)
		// });
		const array = this._groupCategories(this.props.allData[1].productData, 'categoryName'),
			categoryData = [];

		for (var n in array) categoryData.push(n);
			
		return (
			<div className="main section">
				<Navigation categories={categoryData}/>
			</div>
		)
		
	}

};

export default Main;