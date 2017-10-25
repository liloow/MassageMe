const mongoose = require('mongoose')
const Schema = mongoose.Schema


const masseuseSchema = new Schema({
	name: String,
	email: String,
	bio: String,
	avatar: String
})


module.exports = mongoose.model('Masseuse', masseuseSchema);