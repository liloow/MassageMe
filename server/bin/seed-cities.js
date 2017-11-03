const City = require('../models/city')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/massageme');




const cities = [{
		name: 'Liège',
		country: 'BE',
	},
	{
		name: 'Verviers',
		country: 'BE',
	},
	{
		name: 'Waremme',
		country: 'BE',
	}
]


City.create(cities, (err, cites) => {
	if (err) {
		console.error(err);
	}
	cities.forEach(city => console.log(city.name));
	mongoose.disconnect();
});