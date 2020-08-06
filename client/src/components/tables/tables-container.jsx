import React, { Component } from 'react';
import SawTable from './saw-table';
import CutterTable from './cutter-table';

import './tables.styles.scss';

let data;

export default class TablesContainer extends Component {
	state = {
		loading: true,
		cutData: [],
		sawData: [],
	};

	async componentDidMount() {
		fetch('/api/cutter')
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					return Promise.reject(response);
				}
			})
			.then((cut) => {
				// Store the post data to a variable
				data = cut;
				// Fetch another API
				return fetch('/api/saw');
			})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					return Promise.reject(response);
				}
			})
			.then((dataSaw) => {
				this.setState({ cutData: data, sawData: dataSaw, loading: false });
			})
			.catch((error) => {
				console.warn(error);
			});
	}
	render() {
		if (this.state.loading) {
			return (
				<div className='col-9' id='loading'>
					Loading...
				</div>
			);
		}
		const { cutData, sawData } = this.state;
		return (
			<div className='col-9' id='table-container'>
				<div className='row' id='table-row'>
					<SawTable data={sawData} />
					<CutterTable data={cutData} />
				</div>
			</div>
		);
	}
}
