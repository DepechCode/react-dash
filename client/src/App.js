import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import CutDashboard from './pages/Cut-Dashboard';
import Navigation from './components/navigation/navigation';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Switch>
				<Route exact path='/' component={CutDashboard} />
			</Switch>
		</div>
	);
}

export default App;
