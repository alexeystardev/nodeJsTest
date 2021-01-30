const express = require('express');
const app = express();
const path = require("path");
const db = require('./src/likeDB/db.js');
const publicDirectoryPath = path.join(__dirname, "./Public");
const bodyParser = require("body-parser");
const schema = require('./src/joiValidator/joiValidator');
const dotenv = require("dotenv").config();
const fetch = require("./src/fetch/myFetch");
const pushContactData = require('./src/dbConnection/pushContact.js');

const port = 3000

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static(publicDirectoryPath));
app.set('view engine', 'ejs');

app.get("", (req, res) => {
	res.render("index");
});

app.get("/contact", (req, res) => {
	res.render("contact_page");
});
app.get("/thanks_page", (req, res) => {
	res.render("thanks_page")
});

app.post("/contact", (req, res) => {
	const {
		error,
		value
	} = schema.validate(req.body);
	if (error) {
		res.render("404")
	} else {
		pushContactData(value, res);
	}
});

app.get("/services", (req, res) => {
	res.render("services_page");
});

app.get("/movies", (req, res) => {
	let result = fetch.get(
		`http://www.omdbapi.com/?s=Superman&apikey=${process.env.API_KEY}`
	);
	result.then((movies) => {
		if (movies.Response === "True") {
			res.render("movies_page", {
				movies
			});
		} else {
			const dead = "Maybe Api is Dead!";
			res.render("404apiDead", {
				dead
			});
		}
	});
});


app.get("/about", (req, res) => {
	res.render("about_page");
});

app.get("/team", (req, res) => {
	res.render("team_page", {
		db
	});
});

app.get('*', (req, res) => {
	res.render("404");
});

app.listen(port, () => {
	console.log(`Running on port: ${port}`)
})