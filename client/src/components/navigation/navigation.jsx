import React, { Component } from 'react';

import NavLinks from './nav-links';

export default class Navigation extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark' id='nav-main'>
				<a className='navbar-brand' href='/'>
					<img
						src={process.env.PUBLIC_URL + '/images/logoCthumb.png'}
						alt='CMG'
						height='50px'
						width='60px'
					/>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<NavLinks />
			</nav>
		);
	}
}
