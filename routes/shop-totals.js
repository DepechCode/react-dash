require('dotenv').config();
const TrackviaAPI = require('trackvia-api');
const express = require('express');

const api = new TrackviaAPI(process.env.TRACKVIA_KEY, process.env.TRACKVIA_TOKEN);
const router = express.Router();

const addCommas = (num) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const formatNumber = (num) => {
	return Number.parseFloat(num).toFixed(2) * 1;
};

router.get('/', (req, res) => {
	api.getView(1394)
		.then((res) => res.data)
		.then((data) =>
			data.map((job) => {
				return {
					price: formatNumber(job['Total Price']),
					sqft: formatNumber(job['Total Square Feet']),
					slabCount: parseInt(job['Slabs Assigned Count'], 10),
					slabCost: formatNumber(job['Slab Cost']),
					jobs: parseInt(job['Record ID'], 10),
					slabSqft: formatNumber(job['Slabs Assigned SqFt']),
				};
			})
		)
		.then((result) =>
			result.map((job) => {
				return {
					waste:
						job.sqft || job.sqft > job.slabSqft
							? formatNumber(((job.slabSqft - job.sqft) / job.slabSqft) * 100)
							: 0,
					price: job.price ? addCommas(job.price) : 0,
					sqft: job.sqft ? addCommas(job.sqft) : 0,
					slabCount: job.slabCount ? job.slabCount : 0,
					slabCost: job.slabCost ? addCommas(job.slabCost) : 0,
					jobs: job.jobs ? job.jobs : 0,
					slabSqft: job.slabSqft ? addCommas(job.slabSqft) : 0,
				};
			})
		)
		.then((json) => {
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(json));
		})
		.catch((err) => console.error(err));
});

module.exports = router;
