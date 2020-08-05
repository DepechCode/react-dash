require('dotenv').config();
const TrackviaAPI = require('trackvia-api');
const express = require('express');

const api = new TrackviaAPI(process.env.TRACKVIA_KEY, process.env.TRACKVIA_TOKEN);
const router = express.Router();

router.get('/', (req, res, next) => {
	api.getView(200)
		.then((res) =>
			res.data
				.filter((crew) => crew['Status'] === 'ACTIVE' && crew['PRIMARY ROLE'] != null)
				.map((crew) => {
					return {
						id: crew['id'],
						name: crew['Name'],
						status: crew['Status'] ? crew['Status'] : null,
						role: crew['PRIMARY ROLE'] ? crew['PRIMARY ROLE'] : null,
					};
				})
		)
		.then((data) => {
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(data));
		})
		.catch((err) => console.log(err));
});

module.exports = router;
