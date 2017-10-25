const mongoose = require('mongoose')
const Schema = mongoose.Schema



const massageSchema = new Schema({
	name: String,
	description: String,
	price: String,
	picture: String
})


module.exports = mongoose.model('Massage', massageSchema);