import React, { Component } from 'react';
import SubViewItem from './subViewItem';



class SubView extends Component {
	constructor(props) {
		super(props);
	}

	render(){

		let currentSubView = this.props.currentSubView,
			subViewGrouping = this.props.groupSubCategories(currentSubView,'grouping'),
			subGroups = this.props.sortSubGroups(subViewGrouping);


		// const allSubGroups = currentSubView.map((sub, index) => {
		// 	console.log(sub)
		// 	return (
		// 		<div key={index}>
		// 			Type: {sub.typeName}
		// 			Model: {sub.model + ''}
		// 			Quantity PerBox: {sub.quantityPerBox}
		// 		</div>
		// 	)
		// });

		// const allSubGroups = subGroups.map((sub, index) => {
		// 	 subViewGrouping[sub];
		// });

		const allSubGroups = subGroups.map((subgroup,index) => {
			return (
				<SubViewItem key={index}
					subGroup={subViewGrouping[subgroup]}/>
			)
		})
	

		return (
			<div className="subcategory">
				{allSubGroups}
			</div>
		)
	}

};

export default SubView;