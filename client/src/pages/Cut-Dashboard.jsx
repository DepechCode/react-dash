import React from 'react';

import WeatherContainer from '../components/weather/weather-container';
import CardRow from '../components/Cards/Cards';
import TablesContainer from '../components/tables/tables-container';

const CutDashboard = () => {
	return (
		<div className='container-fluid' id='main-container'>
			<CardRow />
			<div className='weather-tables-container'>
				<div className='row' id='weather-tables-row'>
					<WeatherContainer />
					<TablesContainer />
				</div>
			</div>
		</div>
	);
};

export default CutDashboard;
