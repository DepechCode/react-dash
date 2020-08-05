require('dotenv').config();
const TrackviaAPI = require('trackvia-api');
const express = require('express');

const api = new TrackviaAPI(process.env.TRACKVIA_KEY, process.env.TRACKVIA_TOKEN);
const router = express.Router();

const formatNumber = (num) => {
	return Number.parseFloat(num).toFixed(2) * 1;
};

router.get('/', (req, res, next) => {
	api.getView(1627)
		.then((res) => res.data)
		.then((data) =>
			data.map((job) => {
				return {
					cutter: job['Cutter'],
					price: formatNumber(job['Total Price']),
					sqFt: formatNumber(job['Total Square Feet']),
					slabSqFt: formatNumber(job['Slabs Assigned SqFt']),
					slabCost: formatNumber(job['Slab Cost']),
					id: job['id'],
					slabCount: parseInt(job['Slabs Assigned Count'], 10),
					jobs: 1,
				};
			})
		)
		.then((data) =>
			data.reduce((acc, job) => {
				let name = acc[job.cutter];
				if (name) {
					name.price += job.price;
					name.sqFt += job.sqFt;
					name.slabSqFt += job.slabSqFt;
					name.slabCost += job.slabCost;
					name.slabCount += job.slabCount;
					name.jobs += job.jobs;
				} else {
					acc[job.cutter] = job;
				}
				return acc;
			}, {})
		)
		.then((json) => {
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(json));
		})
		.catch((err) => console.error(err));
});

module.exports = router;
