const mongoose = require('mongoose')
const Schema = mongoose.Schema


const citySchema = new Schema({
	name: String,
	country: String,
	extraInfo: {
		type: Object,
		default: {}
	},
})


module.exports = mongoose.model('City', citySchema);