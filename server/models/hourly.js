const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Masseuses = require('../models/masseuses')



const hourlySchema = new Schema({
	date: {
		type: Date,
		min: Date.now
	},
	slot: {
		type: String,
		enum: ['08:30', '10:00', '11:30', '13:00', '14:30', '15:30', '17:00', '18:30', '20:00', '21:30']
	},
	masseuse: [{
		_id: {
			type: Schema.Types.ObjectId,
			ref: 'Masseuse'
		},
		isbooked: {
			type: Boolean,
			default: false
		}
	}],
})


module.exports = mongoose.model('Hourly', hourlySchema);