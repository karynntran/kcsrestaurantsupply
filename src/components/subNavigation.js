import React, { Component } from 'react';

import SubNavigationItem from './subNavigationItem';


class SubNavigation extends Component {
	constructor(props) {
		super(props);

	}


	render(){
		const groups = this.props.sortGroups;

		const subNavigation = groups.map((subnav, index) => {
			return (
				<SubNavigationItem key={index}
					subNavItem={subnav}
					subGroups={groups}
					setSubView={this.props.setSubView}/>
			)
		})

		return (
			<div>
				<ul className="sub-navigation">
					{subNavigation}
				</ul>
			</div>
		)
		
	}

};

export default SubNavigation;
