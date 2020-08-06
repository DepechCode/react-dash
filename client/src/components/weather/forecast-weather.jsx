import React from 'react';

import './weather.styles.scss';

const ForecastWeather = (props) => {
	const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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

	const forecast = props.daily.data;
	const weather = forecast.map((i) => {
		return {
			day: dayOfWeek[new Date(i.time * 1000).getDay()],
			icon: icons[i.icon],
			high: `${Math.round(i.temperatureHigh)}°`,
			low: `${Math.round(i.temperatureLow)}°`,
		};
	});

	return (
		<table className='table table-bordered' id='forecast-table'>
			<thead>
				<tr id='header-row'>
					<th>Day</th>
					<th>Icon</th>
					<th>Hi</th>
					<th>Lo</th>
				</tr>
			</thead>
			<tbody>
				{weather.slice(0, 5).map((row) => (
					<tr key={row.day}>
						<td>{row.day}</td>
						<td>
							<i className={row.icon}></i>
						</td>
						<td>{row.high}</td>
						<td>{row.low}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ForecastWeather;
