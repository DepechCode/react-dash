require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');

const weatherRouter = require('./routes/weather');
const geocoding = require('./routes/geocoder');
const shopRouter = require('./routes/shop-totals');
const cutterRouter = require('./routes/cutter-totals');
const sawRouter = require('./routes/saw-totals');
const crewRouter = require('./routes/crews');

app = express();
port = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(helmet());
app.use(morgan('common'));

app.use('/api/weather', weatherRouter);
app.use('/api/geocode', geocoding);
app.use('/api/shop', shopRouter);
app.use('/api/cutter', cutterRouter);
app.use('/api/saw', sawRouter);
app.use('/api/crews', crewRouter);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '/client/build'));
	});
}

app.listen(port, () => {
	console.log(`Server Is Running On Port ${port}`);
});
