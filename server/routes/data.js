const express = require('express');
const router = express.Router();
const Masseuses = require('../models/masseuses')
const Hourly = require('../models/hourly')

router.get('/masseuses', (req, res, next) => {
	Masseuses.find({}).then(masseuses =>
		res.json(masseuses)
	).catch(err => next(err))
})

// router.get('/slots', (req, res, next) => {
// 	Slot.find({})
// 		.populate({ path: 'slots.slot1._id', model: 'Masseuse' })
// 		.populate({ path: 'slots.slot2._id', model: 'Masseuse' })
// 		.populate({ path: 'slots.slot3._id', model: 'Masseuse' })
// 		.populate({ path: 'slots.slot4._id', model: 'Masseuse' })
// 		.populate({ path: 'slots.slot5._id', model: 'Masseuse' })
// 		.populate({ path: 'slots.slot6._id', model: 'Masseuse' })
// 		.populate({ path: 'slots.slot7._id', model: 'Masseuse' })
// 		.populate({ path: 'slots.slot8._id', model: 'Masseuse' })
// 		.exec((err, doc) => console.log(doc)).then(slots =>
// 			res.json(slots)
// 		).catch(err => next(err))
// })

router.get('/slots', (req, res, next) => {
	Hourly.find({}).populate('masseuse._id').exec((err, doc) => console.log(doc)).then(slots =>
		res.json(slots)
	).catch(err => next(err))
})

router.patch('/payment', (req, res, next) => {
	let { date, slot, masseuse } = req.body
	date = date.split('/')
	Hourly.update({
			$and: [
				{ 'date': new Date(Date.UTC(date[0], date[1] - 1, date[2])) },
				{ 'slot': slot },
				{ 'masseuse._id': masseuse }
			]
		}, { $set: { 'masseuse.$.isbooked': true } }).then(slot => res.json(slot))
		.catch(err => next(err))
})

module.exports = router;