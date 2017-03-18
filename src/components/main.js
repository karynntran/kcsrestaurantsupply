import React, { Component } from 'react';

import Navigation from './navigation';
import MainView from './mainView';


// import Products from './components/products';


class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

	}

	// _goToActiveView(){
	// 	this.state.active ? this.setState({ active: false}) : this.setState({ active: true });
	// }



	render(){
		return (
			<div className="main section">
				<Navigation categoryData={this.props.categoryData} setMainView={this.props.setMainView}/>
				<MainView currentView={this.props.currentView}
					mainViewLoaded={this.props.mainViewLoaded}
					setSubView={this.props.setSubView}
					subViewLoaded={this.props.subViewLoaded}
					groupCategories={this.props.groupCategories}
					sortGroups = {this.props.sortGroups}/>
			</div>
		)
		
	}

};

export default Main;