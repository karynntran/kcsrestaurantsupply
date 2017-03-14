import React, { Component } from 'react';


// import Products from './components/products';


class MainView extends Component {
	constructor(props) {
		super(props);

		this.state = {};


	}


	render(){
		return (
			<div className="main-view section">
				{this.props.currentView}
			</div>
		)
		
	}

};

export default MainView;