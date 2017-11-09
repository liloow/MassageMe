require('dotenv').config()
const history = require('express-history-api-fallback')
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport");
const User = require("./models/user");
const { Strategy, ExtractJwt } = require("passport-jwt");
const cors = require('cors')

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
if (process.env.NODE_ENV === 'DEV') {
	app.use(
		cors({
			origin: "http://localhost:8080"
		})
	);
}

passport.initialize();
// Create the strategy for JWT
const strategy = new Strategy({
		// this is a config we pass to the strategy
		// it needs to secret to decrypt the payload of the
		// token.
		secretOrKey: process.env.JWT_SECRET,
		// This options tells the strategy to extract the token
		// from the header of the request
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
	},
	(payload, done) => {
		// payload is the object we encrypted at the route /api/token
		// We get the user id, make sure the user exist by looking it up
		User.findById(payload.id).then(user => {
			if (user) {
				// make the user accessible in req.user
				done(null, user);
			} else {
				done(new Error("User not found"));
			}
		});
	}
);
passport.use(strategy);



const auth = require('./routes/auth')
const data = require('./routes/data')

app.use('/api', auth)
app.use('/api/data', data)

const clientRoot = path.join(__dirname, '../client/dist');
app.use('/', express.static(clientRoot))
app.use(history('index.html', { root: clientRoot }))


// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	// return the error message only in development mode
	res.json({
		message: err.message,
		error: req.app.get('env') === 'development' ? err.message : { message: 'Something went wrong with your request, please try again and if the problem persists, contact an administrator.' }
	});
});

module.exports = app;