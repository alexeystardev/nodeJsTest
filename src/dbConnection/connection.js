const mongoose = require('mongoose');

function connect() {
	mongoose.connect(`${process.env.DB_PASS_LINK}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function () {
		console.log('MongoDB connected');
	});
}

module.exports = connect;