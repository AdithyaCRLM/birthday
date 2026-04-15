const express = require('express');
const home=express.Router();
const path = require('path');
const homecontroller=require('../controllers/home');
home.get('/',homecontroller.gethome);
home.get('/home/s1',homecontroller.getwishes);
home.get('/home/wish',homecontroller.sendwish);
home.post('/home/wish',homecontroller.postwish);
module.exports= home;