const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const bcrypt = require('bcrypt');



 
const productRouter = require('./routes/product');
const productRouterUser = require('./routes/user');
const ProductModlesUser = require('./models/users');
const productmodels = require('./models/products');

mongoose.connect(config.database,{useNewUrlParser: true});

mongoose.connection.on('connected', (req, res, next)=>{
	console.log('Database is connected on :' + config.database);
});
mongoose.connection.on('error', ( req, res, next)=>{
	console.log('Darabase is not connected on :' + err)
});

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/register', productRouter);
app.use('/register', productRouterUser);






const port = 3000;
app.listen(port, ()=>{
	console.log(`you are listening to port : ${port}`);
});




