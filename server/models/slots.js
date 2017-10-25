const mongoose = require('mongoose')
const Schema = mongoose.Schema


const slotSchema = new Schema({
	week: {
		Monday: {
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
		},
		Tuesday: {
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
		},
		Wednesay: {
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
		},
		Thursday: {
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
		},
		Friday: {
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
		},
		Saturday: {
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
		},
		Sunday: {
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
		},
	},
	email: String,
	bio: String,
	avatar: String
})


module.exports = mongoose.model('Slot', slotSchema);