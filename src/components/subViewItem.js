import React, { Component } from 'react';



class SubViewItem extends Component {
	constructor(props) {
		super(props);

		this.state = {};

	}


	render(){
		let subGroup = this.props.subGroup;
		let image = this.props.image;
		let imageStyle = {
			backgroundImage: `url(../../images/products/${image})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: '100%'
		}

		const subGroupItems = subGroup.map((sub, index) => {
			return (
				<tr key={index}>
					<td>{sub.model}</td>
					<td>{sub.dimension}</td>
				</tr>
			)
		});

		return (
			<div className="subview-category">
				<div className="product-image" style={imageStyle}></div>
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