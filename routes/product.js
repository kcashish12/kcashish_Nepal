const express = require('express');
const router = express.Router();
const Products = require('../models/products');
const config = require('../config/database');

router.get('/signup', (req, res, next)=>{
	res.render('layout');

});
router.get('/home', (req, res, next)=>{
	res.render('home');

});
router.get('/welcome', (req, res, next)=>{
	res.render('welcome');

});

router.post('/signup', (req, res, next)=>{
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
		res.render('/signup');

	})
	.catch(err =>{
		res.status(404).json({
			success: false,
			msg:'Product is not saved'
		});
	});

});
router.get('/contact', (req, res, next)=>{
	res.render('contact');

});

module.exports = router;