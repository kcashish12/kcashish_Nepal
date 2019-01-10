const mongoose = require('mongoose');
const config = require('../config/database');

const productSchema = mongoose.Schema({
	name:{
		type:String
	},
	price:{
		type: Number
	}
});

module.exports = mongoose.model('Product', productSchema);