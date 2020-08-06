import React from 'react';

import './weather.styles.scss';

const icons = {
	'clear-day': 'fas fa-sun',
	'clear-night': 'far fa-moon',
	rain: 'fas fa-cloud-rain',
	snow: 'far fa-snowflake',
	sleet: 'fas fa-cloud-showers-heavy',
	wind: 'fas fa-wind',
	fog: 'fas fa-smog',
	cloudy: 'fas fa-cloud',
	'partly-cloudy-day': 'fas fa-cloud-sun',
	'partly-cloudy-night': 'fas fa-cloud-moon',
	thunderstorm: 'fas fa-poo-storm',
};

const CurrentWeather = (props) => {
	return (
		<div className='row'>
			<div className='col-4' id='current-temp'>
				{`${Math.round(props.currently.temperature)}°`}
			</div>
			<div className='col-4' id='current-icon'>
				<i className={`${icons[props.currently.icon]} fa-2x`}></i>
			</div>
			<div className='col-4' id='current-summary'>
				{props.currently.summary}
			</div>
		</div>
	);
};

export default CurrentWeather;
