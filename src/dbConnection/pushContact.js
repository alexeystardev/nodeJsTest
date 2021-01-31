const dbCon = require('./connection.js');
const mysql = require('mysql');

function pushContactData(value, res) {

	let sql = `INSERT INTO log VALUES(null,?,?,?,?)`;
	let dataArray = [value.name, value.email, value.phone, value.message];
	dbCon.connection.query(sql, dataArray, (error, results, fields) => {
		  if (results.affectedRows) {
		  	res.redirect('/thanks_page?id=' +results.insertId);
		  } else {
		  	res.redirect('/contact');
		}
	});
}

module.exports = pushContactData;


