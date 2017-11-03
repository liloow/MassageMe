const mongoose = require('mongoose')
const Schema = mongoose.Schema


const masseuseSchema = new Schema({ // TODO : Etoffer
	name: String,
	email: String,
	bio: String,
	avatar: String,
	city: {
		type: String,
		required: true
	}
})


module.exports = mongoose.model('Masseuse', masseuseSchema);