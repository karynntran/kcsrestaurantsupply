import React, { Component } from 'react';



class SubView extends Component {
	constructor(props) {
		super(props);


	}



	render(){

		let subArrays = this.props.subArrays;


		const allSubGroups = subArrays.map((sub, index) => {
			return (
				<div key={index}>
					{sub.model + ''}
				</div>
			)
		});

		return (
			<div>
				<div className="subcategory">
					{ allSubGroups }
				</div>
			</div>
		)
	}

};

export default SubView;