import React, { Component } from 'react';



class NavigationItem extends Component {
	constructor(props) {
		super(props);

		this.state = { active: false };
		this._selectedNav = this._selectedNav.bind(this);

	}

	_selectedNav(){
		this.state.active ? this.setState({ active: false}) : this.setState({ active: true });
	}


	render(){
		return (
			<li className={["navigation-li", this.state.active].join(" ")} onClick={this._selectedNav}>{this.props.category}</li>
		)
	}

};

export default NavigationItem;