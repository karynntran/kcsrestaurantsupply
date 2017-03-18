import React, { Component } from 'react';



class NavigationItem extends Component {
	constructor(props) {
		super(props);

		this.state = { active: false };
		this._selectedNav = this._selectedNav.bind(this);

	}

	_selectedNav(){
		this.state.active ? this.setState({ active: false}) : this.setState({ active: true });
		this.props.setMainView(this.props.category);
	}



	render(){
		return (
			<li className={["navigation-li", this.state.active].join(" ")} onClick={this._selectedNav}>
				<span>{this.props.category}</span>
				<div className="nav-toggle">></div>
			</li>
		)
	}

};

export default NavigationItem;