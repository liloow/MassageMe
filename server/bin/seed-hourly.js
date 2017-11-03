const Hourly = require('../models/hourly')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/massageme');


const hourlyData = []


function createSlots() {

	const slots = ['08:30', '10:00', '11:30', '13:00', '14:30', '15:30', '17:00', '18:30', '20:00', '21:30']

	for (i = 0; i < 28; i++) {
		slots.forEach(el => {
			const nov = {
				date: Date.UTC(2017, 10, i),
				slot: el,
				masseuse: [{
						_id: '59f86f16c989b97b3e94fa21',
						isbooked: Math.round(Math.random()) === 0 ? true : false,
					},
					{
						_id: '59f86f16c989b97b3e94fa23',
						isbooked: Math.round(Math.random()) === 0 ? true : false,
					},
					{
						_id: '59f86f16c989b97b3e94fa24',
						isbooked: Math.round(Math.random()) === 0 ? true : false,
					}
				]
			}
			const dec = {
				date: Date.UTC(2017, 11, i),
				slot: el,
				masseuse: [{
						_id: '59f86f16c989b97b3e94fa21',
						isbooked: Math.round(Math.random()) === 0 ? true : false,
					},
					{
						_id: '59f86f16c989b97b3e94fa23',
						isbooked: Math.round(Math.random()) === 0 ? true : false,
					},
					{
						_id: '59f86f16c989b97b3e94fa24',
						isbooked: Math.round(Math.random()) === 0 ? true : false,
					}
				]
			}
			hourlyData.push(nov)
			hourlyData.push(dec)
		})
	}
	console.log("hourlyData")
	return true
}

console.log(createSlots())


Hourly.create(hourlyData, (err, hourlys) => {
	if (err) {
		console.error(err);
	}
	hourlys.forEach(hourly => console.log(hourly.date));
	mongoose.disconnect();
});