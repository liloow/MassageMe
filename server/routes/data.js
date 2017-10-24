const express = require('express');
const router = express.Router();
const Masseuses = require('../models/masseuses')

router.get('/masseuses', (req, res, next) => {
	Masseuses.find({}).then(masseuses =>
		res.json(masseuses)
	).catch(err => next(err))
})

module.exports = router;