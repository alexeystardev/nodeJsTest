const mongoose = require('mongoose');

function connect() {
	mongoose.connect(`mongodb+srv://${process.env.DB_PASS_LINK}@cluster0.pbli4.mongodb.net/logcontact?retryWrites=true&w=majority`, {
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