import React, { Component } from 'react';
import './Cards.styles.scss';

export default class CardRow extends Component {
	state = {
		loading: true,
		totals: [],
	};

	async componentDidMount() {
		const res = await fetch('/api/shop');
		const data = await res.json();
		this.setState({ totals: data[0], loading: false });
	}
	render() {
		const { totals, loading } = this.state;
		return (
			<div className='card-container'>
				<div className='card-deck'>
					<div className='card bg-light mb-3'>
						<div className='card-header'>Line Items Cut</div>
						<div className='card-body'>
							<p className='card-text' id='line-items'>
								{loading ? 'Loading...' : totals.jobs}
							</p>
						</div>
					</div>
					<div className='card bg-light mb-3'>
						<div className='card-header'>SqFt Cut</div>
						<div className='card-body'>
							<p className='card-text' id='sqft'>
								{loading ? 'Loading...' : totals.sqft}
							</p>
						</div>
					</div>
					<div className='card bg-light mb-3'>
						<div className='card-header'>Total Price</div>
						<div className='card-body'>
							<p className='card-text' id='price'>
								{loading ? 'Loading...' : `$${totals.price}`}
							</p>
						</div>
					</div>
					<div className='card bg-light mb-3'>
						<div className='card-header'>Slabs Used</div>
						<div className='card-body'>
							<p className='card-text' id='slab-count'>
								{loading ? 'Loading...' : totals.slabCount}
							</p>
						</div>
					</div>
					<div className='card bg-light mb-3'>
						<div className='card-header'>Slab SqFt</div>
						<div className='card-body'>
							<p className='card-text' id='slab-sqft'>
								{loading ? 'Loading...' : totals.slabSqft}
							</p>
						</div>
					</div>
					<div className='card bg-light mb-3'>
						<div className='card-header'>Slab Cost</div>
						<div className='card-body'>
							<p className='card-text' id='slab-cost'>
								{loading ? 'Loading...' : `$${totals.slabCost}`}
							</p>
						</div>
					</div>
					<div className='card bg-light mb-3'>
						<div className='card-header'>Waste Percentage</div>
						<div className='card-body'>
							<p className='card-text' id='waste'>
								{loading
									? 'Loading...'
									: totals.waste > 0
									? `${totals.waste} %`
									: '0%'}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
