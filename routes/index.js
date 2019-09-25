const router = require('express').Router();
const Model = require('../models/');


router.get('/user/login', (req,res) => res.render('login_form'));

router.get('/user/register', (req,res) => res.render('registration_form'));

module.exports =  router;