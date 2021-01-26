const fetch = require("node-fetch");

const get = (url) => {
	return fetch(url).then((res) => res.json());
};

exports.get = get;
