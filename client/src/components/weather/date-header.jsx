import React from 'react';

import './weather.styles.scss';

const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const fullDate =
	dayOfWeek[new Date().getDay()] +
	' ' +
	months[new Date().getMonth()] +
	' ' +
	new Date().getDate() +
	', ' +
	new Date().getFullYear();

export default function DateHeader() {
	return (
		<div className='col-12' id='date-header'>
			{fullDate}
		</div>
	);
}
