const Streamer = require('../models/Streamer.js'); 

exports.findStreamers = () => {
	Streamer.find().exec()
	.then((results) => results)
	.catch((error) => console.log(error));
}
