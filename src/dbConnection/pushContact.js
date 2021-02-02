const mongoose = require('mongoose');
const validator = require('validator');

const logContactSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid')
			}
		},
	},
	phone: Number,
	message: String
});

module.exports = mongoose.model('Contact', logContactSchema)


