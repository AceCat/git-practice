var mongoose = require('mongoose');

var CivilianSchema = new mongoose.Schema({
	name: String,
	age: Number,
	origin: String
});

var civilianModel = mongoose.model('Civilian', CivilianSchema);

module.exports = civilianModel;
