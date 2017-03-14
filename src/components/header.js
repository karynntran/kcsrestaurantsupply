import React, { Component } from 'react';


const Header = (props) => {
	return (
		<div className="header section">
			<div className="logo vertical"></div>
			<div className="company-information vertical">
				<div className="company-name">{props.companyData.companyName}</div>
				<div className="address">
					{props.companyData.address}
				</div>
				<div className="phone-number">{props.companyData.phoneNumber}</div>
			</div>
		</div>
	)
};

export default Header;