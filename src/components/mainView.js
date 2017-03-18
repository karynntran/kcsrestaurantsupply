import React, { Component } from 'react';
import SubView from './subView';
import SubNavigationItem from './subNavigationItem';



// import Products from './components/products';


class MainView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: this.props.mainViewLoaded
		};


	}

	render(){

		let viewData = this.props.currentView,
			groups = this.props.groupCategories(viewData,'typeName'),
			sortGroups = this.props.sortGroups(groups);
		
		if (this.props.mainViewLoaded){

			const subNavigation = sortGroups.map((subnav, index) => {
				return (
					<SubNavigationItem key={index}
						subNavItem={subnav}
						subGroups={groups}
						setSubView={this.props.setSubView}/>
				)
			})

			const subviews = sortGroups.map((group, index) => {
				const subArrays = groups[group];
					return (
					<li className="subcategory-container" key={index}>
						<div className="subcategory-title">{group}</div>

						<SubView groupType={group}
							 groups={groups}
							 subArrays={subArrays}/>
					</li>
				)

			});

			return (
				<div className="main-view">
					<div className="main-view-title">{viewData[0].categoryName}</div>

					<ul className="sub-navigation">
						{subNavigation}
					</ul>

					<div className="sub-view">
						<ul>
							{subviews}
						</ul>
					</div>


				</div>
			)
		} else {
			return (
				<div className="main-view">
					<div>Welcome to KCS Supply</div>
				</div>
			)
		}
		
	}

};

export default MainView;