import React, { Component } from 'react';
import ForecastWeather from './forecast-weather';
import CurrentWeather from './current-weather';
import LocationHeader from './location-header';
import DateHeader from './date-header';
import './weather.styles.scss';

class WeatherContainer extends Component {
	state = {
		loading: true,
		weather: [],
	};

	async componentDidMount() {
		const res = await fetch('http://localhost:4000/api/weather');
		const data = await res.json();
		this.setState({ weather: data, loading: false });
	}

	render() {
		if (this.state.loading) {
			return <div>Loading...</div>;
		}
		const { weather } = this.state;
		return (
			<div className='col-3' id='weather-container'>
				<div className='card-front active col-12'>
					<LocationHeader />
					<DateHeader />
					<div className='col-12' id='weather-body'>
						<CurrentWeather currently={weather.currently} />
					</div>
					<ForecastWeather daily={weather.daily} />
				</div>
			</div>
		);
	}
}

export default WeatherContainer;
