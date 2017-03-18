import React, { Component } from 'react';



class SubNavigationItem extends Component {
	constructor(props) {
		super(props);

		this.state = { active: false };
		this._selectedSubNav = this._selectedSubNav.bind(this);

	}

	_selectedSubNav(){
		this.state.active ? this.setState({ active: false}) : this.setState({ active: true });
		this.props.setSubView(this.props.subNavItem);
	}


	render(){
		console.log(this.props.subGroups)
		return (
			<li key={this.props.key} className={["sub-navigation-li", this.state.active].join(" ")} onClick={this._selectedSubNav}>
				<span>{this.props.subNavItem}</span>
			</li>
		)
	}

};

export default SubNavigationItem;