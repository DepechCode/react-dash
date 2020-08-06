import React from 'react';

import './tables.styles.scss';
import { addCommas, formatNumber } from '../../helpers/helpers';

export default function CutterTable(props) {
	const data = props.data;
	let records = [];
	for (const key in data) {
		if (data.hasOwnProperty(key)) {
			const e = data[key];
			records.push(e);
		}
	}
	return (
		<div className='table-responsive' id='cutter-table-container'>
			<table className='table table-striped table-bordered' id='cutter-table'>
				<thead className='table-header'>
					<tr>
						<th id='cutter'>Cutter</th>
						<th>Jobs</th>
						<th>SqFt</th>
						<th>Job Price</th>
						<th>Slabs</th>
						<th>Slab SqFt</th>
						<th>Slab Cost</th>
						<th>Waste</th>
					</tr>
				</thead>
				<tbody>
					{records.map((rows) => (
						<tr key={rows.cutter}>
							<td id='cut-row-header'>{rows.cutter}</td>
							<td>{rows.jobs ? rows.jobs : 0}</td>
							<td>{rows.sqFt ? addCommas(formatNumber(rows.sqFt)) : 0}</td>
							<td>{rows.price ? `$${addCommas(formatNumber(rows.price))}` : 0}</td>
							<td>{rows.slabCount ? rows.slabCount : 0}</td>
							<td>{rows.slabSqFt ? formatNumber(rows.slabSqFt) : 0}</td>
							<td>
								{rows.slabCost ? `$${addCommas(formatNumber(rows.slabCost))}` : 0}
							</td>
							<td>
								{rows.slabSqFt > rows.sqFt
									? `${formatNumber(
											((rows.slabSqFt - rows.sqFt) / rows.slabSqFt) * 100
									  )}%`
									: '0%'}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
