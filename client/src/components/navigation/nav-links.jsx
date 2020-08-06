import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
	return (
		<div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<NavLink to='/cutdashboard' className='nav-link'>
						Cut Data
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default NavLinks;
