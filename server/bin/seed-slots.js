const Slot = require('../models/slot')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/massageme');


const slotData = [{
	date: Date.UTC(2017, 9, 28),
	slots: {
		slot1: [{
				_id: '59f0e8daa63e737e933a1acd',
				isbooked: false,
			},
			{
				_id: '59f0e8daa63e737e933a1acb',
				isbooked: false,
			},
			{
				_id: '59f0e8daa63e737e933a1acc',
				isbooked: true,
			}
		],
		slot2: null,
		slot3: null,
		slot4: [{
				_id: '59f0e8daa63e737e933a1acd',
				isbooked: false,
			}, {
				_id: '59f0e8daa63e737e933a1acb',
				isbooked: false,
			},
			{
				_id: '59f0e8daa63e737e933a1ac9',
				isbooked: false,
			}
		],
		slot5: null,
		slot6: [{
				_id: '59f0e8daa63e737e933a1acd',
				isbooked: false,
			},
			{
				_id: '59f0e8daa63e737e933a1acb',
				isbooked: false,
			},
			{
				_id: '59f0e8daa63e737e933a1ac9',
				isbooked: false,
			}
		],
		slot7: null,
		slot8: null,
	}
}]


Slot.create(slotData, (err, slots) => {
	if (err) {
		console.error(err);
	}
	slots.forEach(slot => console.log(slot.date));
	mongoose.disconnect();
});