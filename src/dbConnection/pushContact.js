const dbCon = require('./connection.js');
const mysql = require('mysql');

function pushContactData(value, res) {

	let sql = `INSERT INTO log VALUES(null,?,?,?,?)`;
	let dataArray = [value.name, value.email, value.phone, value.message];
	dbCon.connection.query(sql, dataArray, (error, results, fields) => {
		if (results.affectedRows) {
			let curId = results.insertId;
				res.redirect("thanks_page?id=" + curId);
				dbCon.connection.end();
		} else {
			console.log(error)
		}
	});
}

module.exports = pushContactData;


