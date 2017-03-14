import React, { Component } from 'react';

import NavigationItem from './navigationItem';


class Navigation extends Component {
	constructor(props) {
		super(props);

	}


	render(){
		const categoryArray = this.props.categories;

		const categories = categoryArray.map((category, id) => {
			return (
				<NavigationItem 
					category={category} 
					key={id} />
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
