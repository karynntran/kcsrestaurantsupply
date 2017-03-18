import React, { Component } from 'react';

import NavigationItem from './navigationItem';


class Navigation extends Component {
	constructor(props) {
		super(props);

	}


	render(){
		const categoryArray = this.props.categoryData;

		const categories = categoryArray.map((category, index) => {
			return (
				<NavigationItem 
					category={category} 
					key={index}
					setMainView={this.props.setMainView} />
			)
		});

		return (
			<div className={"navigation"}>
				<ul className="navigation-ul">
					{categories}
				</ul>
			</div>
		)
		
	}

};

export default Navigation;
