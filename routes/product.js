const express = require('express');
const router = express.Router();
const Products = require('../models/products');
const config = require('../config/database');

router.get('/', (req, res, next)=>{
	res.send('GET');

});

router.post('/', (req, res, next)=>{
	const newProduct = new Products({
		name: req.body.name,
		price: req.body.price
	});
	newProduct.save()
	.then(result =>{
		res.status(200).json({
			success: true,
			msg:'Product is saved'
		});
	})
	.catch(err =>{
		res.status(404).json({
			success: false,
			msg:'Product is not saved'
		});
	});

});

module.exports = router;