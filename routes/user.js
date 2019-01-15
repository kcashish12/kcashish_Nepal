const express = require('express');
const router = express.Router(); 
const Users = require('../models/users');
const config = require('../config/database');
const bcrypt = require('bcrypt');


router.get('/contact',(req, res, next)=>{
     res.redirect('contact');
});
router.post('/contact',(req, res, next)=>{
    Users.find({email: req.body.email})
    .exec()
    .then(user =>{
        if (user.length >=1){
            return res.status(409).json({
                message: 'User is alardy register'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                if(err){
                    return res.status(500).json({
                        error:err
                    }); 
                } else{
                    const newUser = new Users({
                        email: req.body.email,
                        username: req.body.username,
                        password: hash
                    }); 
                    newUser.save()
                    .then(result =>{
                        res.status(201).json({
                            message: 'User is Created'
                        });
                    })
                    .catch(err=>{
                        res.status(500).json({
                            error: err
                        });
                    });
                }
              
            });
        }
    })
    
   
    
});





module.exports= router;