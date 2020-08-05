require('dotenv').config();
const axios = require('axios');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
	const darkskyKey = process.env.DS_API_KEY;
	const lon = process.env.LON;
	const lat = process.env.LAT;

	axios
		.get(
			`https://api.darksky.net/forecast/${darkskyKey}/${lat},${lon}?exclude=minutely,hourly,alerts,flags`
		)
		.then((res) => {
			return res.data;
		})
		.then((json) => {
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(json));
		})
		.catch((err) => console.error(err));
});

module.exports = router;
