const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');



const userSchema = new Schema({
	role: {
		enum: ['user', 'physio', 'admin'],
		required: true,
		type: String,
		default: 'user'
	},
	firstname: String,
	lastname: String,
	gender: String,
	phone: String,

	addresses: [Object],
	orderHistory: [Object],
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);