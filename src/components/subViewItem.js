import React, { Component } from 'react';



class SubViewItem extends Component {
	constructor(props) {
		super(props);

		this.state = {};

	}


	render(){
		let subGroup = this.props.subGroup;

		const subGroupItems = subGroup.map((sub, index) => {
			return (
				<tr>
					<td>{sub.model}</td>
					<td>{sub.dimension}</td>
				</tr>
			)
		});

		return (
			<div className="subview-category">
				<table>
					<tbody>
						<tr>
							<th>Model</th>
							<th>Dimensions</th>
						</tr>
						{subGroupItems}
					</tbody>
				</table>
			</div>
		)
	}

};

export default SubViewItem;