const mongoose = require('mongoose')
const Schema = mongoose.Schema



const daySlotSchema = new Schema({
	date: {
		type: Date,
		min: Date.now
	},
	slots: {
		slot1: [{
			_id: {
				type: Schema.Types.ObjectId,
				ref: 'Masseuse'
			},
			isbooked: {
				type: Boolean,
				default: false
			}
		}],
		slot2: [{
			_id: {
				type: Schema.Types.ObjectId,
				ref: 'Masseuse'
			},
			isbooked: {
				type: Boolean,
				default: false
			}
		}],
		slot3: [{
			_id: {
				type: Schema.Types.ObjectId,
				ref: 'Masseuse'
			},
			isbooked: {
				type: Boolean,
				default: false
			}
		}],
		slot4: [{
			_id: {
				type: Schema.Types.ObjectId,
				ref: 'Masseuse'
			},
			isbooked: {
				type: Boolean,
				default: false
			}
		}],
		slot5: [{
			_id: {
				type: Schema.Types.ObjectId,
				ref: 'Masseuse'
			},
			isbooked: {
				type: Boolean,
				default: false
			}
		}],
		slot6: [{
			_id: {
				type: Schema.Types.ObjectId,
				ref: 'Masseuse'
			},
			isbooked: {
				type: Boolean,
				default: false
			}
		}],
		slot7: [{
			_id: {
				type: Schema.Types.ObjectId,
				ref: 'Masseuse'
			},
			isbooked: {
				type: Boolean,
				default: false
			}
		}],
		slot8: [{
			_id: {
				type: Schema.Types.ObjectId,
				ref: 'Masseuse'
			},
			isbooked: {
				type: Boolean,
				default: false
			}
		}],
	}
})


module.exports = mongoose.model('DaySlot', daySlotSchema);