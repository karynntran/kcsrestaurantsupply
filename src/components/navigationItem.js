import React, { Component } from 'react';



class NavigationItem extends Component {
	constructor(props) {
		super(props);

		this.state = { active: false };
		this._selectedNav = this._selectedNav.bind(this);

	}

	_selectedNav(){
		let activeNavs = document.getElementsByClassName('true');
		if (activeNavs[0] != null) {
			activeNavs[0].classList.remove('true');		
		}
		this.state.active ? this.setState({ active: false}) : this.setState({ active: true });
		this.props.setMainView(this.props.category);

		let inactiveSubNav = document.getElementsByClassName('sub-navigation-li');
		[].forEach.call(inactiveSubNav, function(inactive) {
		    inactive.classList.remove("override");
		});
	}



	render(){
		return (
			<li className={["navigation-li", this.state.active].join(" ")} onClick={this._selectedNav}>
				<div className="navitem">
					<div className="main-nav">{this.props.category}</div>
					<div className="nav-toggle">></div>
				</div>
			</li>
		)
	}

};

export default NavigationItem;