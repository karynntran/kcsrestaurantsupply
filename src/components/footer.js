import React, { Component } from 'react';
// require('../../style/sass/header');


const Footer = (props) => {
	return (
		<div className="footer section">
			<div className="footer-content">
				<div className="contact-information">
					<div className="footer-email">{props.companyData.email}</div>
					<div className="footer-phone">{props.companyData.phoneNumber}</div>
				</div>
				<div className="business-hours">
					{props.companyData.hours}
				</div>
				<div className="about-us">
					{props.companyData.about}
				</div>
			</div>
		</div>
	)
};

export default Footer;