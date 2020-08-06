import React, { Component } from 'react';
import CrewListItem from '../components/crews/crew-list-item.component';

//import CrewListItem from '../components/crews/crew-list.component';

class CrewList extends Component {
	state = {
		loading: true,
		crews: [],
	};

	async componentDidMount() {
		const res = await fetch('http://localhost:4000/api/crews');
		const data = await res.json();
		this.setState({ crews: data, loading: false });
	}

	render() {
		if (this.state.loading) {
			return <div>Loading...</div>;
		}

		const grouped = crews.reduce((acc, item) => {
			acc[item.role] = (acc[item.role] || 0) + 1;
			return acc;
		}, {});
		const { crews } = this.state;

		return (
			<div className='container'>
				<CrewListItem crews={crews} groups={grouped} />
			</div>
		);
	}
}

export default CrewList;
