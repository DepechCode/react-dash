require('dotenv').config();
const express = require('express');
const router = express.Router();
const NodeGeocoder = require('node-geocoder');

const options = {
	provider: 'mapquest',
	fetch: 'http://open.mapquestapi.com/geocoding/v1/address',
	apiKey: process.env.MQ_API_KEY,
	formatter: null,
};

router.get('/', function (req, res, next) {
	const geocoder = NodeGeocoder(options);

	res.setHeader('Content-Type', 'application/json');

	// Or using Promise
	const query = req.query.query;
	console.log(query);

	geocoder
		.geocode(query)
		.then(function (geores) {
			res.send(JSON.stringify(geores[0]));
		})
		.catch(function (geoerr) {
			res.send(JSON.stringify(geoerr));
		});
});

module.exports = router;
