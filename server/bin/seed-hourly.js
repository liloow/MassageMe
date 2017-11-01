const Hourly = require('../models/hourly')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/massageme');


const hourlyData = [{
	date: new Date(Date.UTC(2017, 10, 28)),
	slot: '08:30',
	masseuse: [{
			_id: '59f1adabcc2a1e62cc6da446',
			isbooked: false,
		},
		{
			_id: '59f1adabcc2a1e62cc6da447',
			isbooked: true,
		},
		{
			_id: '59f1adabcc2a1e62cc6da445',
			isbooked: true,
		}
	]
}, {
	date: Date.UTC(2017, 10, 28),
	slot: '10:00',
	masseuse: [{
			_id: '59f1adabcc2a1e62cc6da446',
			isbooked: false,
		},
		{
			_id: '59f1adabcc2a1e62cc6da447',
			isbooked: false,
		},
		{
			_id: '59f1adabcc2a1e62cc6da445',
			isbooked: false,
		}
	]
}, {
	date: Date.UTC(2017, 10, 28),
	slot: '11:30',
	masseuse: [{
			_id: '59f1adabcc2a1e62cc6da446',
			isbooked: false,
		},
		{
			_id: '59f1adabcc2a1e62cc6da447',
			isbooked: false,
		},
		{
			_id: '59f1adabcc2a1e62cc6da445',
			isbooked: true,
		}
	]
}, ]


Hourly.create(hourlyData, (err, hourlys) => {
	if (err) {
		console.error(err);
	}
	hourlys.forEach(hourly => console.log(hourly.date));
	mongoose.disconnect();
});