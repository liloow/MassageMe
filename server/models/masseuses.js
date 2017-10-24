const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');



const masseuseSchema = new Schema({
	name: String,
	email: String,
	bio: String,
	avatar: String
})

masseuseSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Masseuse', masseuseSchema);