const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');



const NewSchema = mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }

});



module.exports = mongoose.model('UserNew', NewSchema);