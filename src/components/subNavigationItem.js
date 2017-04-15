import React, { Component } from 'react';



class SubNavigationItem extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			active: false
		};
		this._selectedSubNav = this._selectedSubNav.bind(this);

	}

	_selectedSubNav(){
		let inactiveSubNav = document.getElementsByClassName('sub-navigation-li');
		[].forEach.call(inactiveSubNav, function(inactive) {
		    inactive.classList.add("override");
		});

		this.state.active ? this.setState({ active: false}) : this.setState({ active: true });
		this.props.setSubView(this.props.subGroups, this.props.subNavItem);
	}


	render(){
		let styles = {
			backgroundImage: `url(../../images/products/${this.props.image})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: '100%'
		}
		// console.log(this.props.subGroups[0])
		// console.log(this.props.subGroups)
		return (
			<li key={this.props.key} className={["sub-navigation-li", this.state.active].join(" ")} onClick={this._selectedSubNav}>
				<span>{this.props.subNavItem}</span>
				<div className="nav-product-image" style={styles}></div>
			</li>
		)
	}

};

export default SubNavigationItem;