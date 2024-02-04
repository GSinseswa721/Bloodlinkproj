const express = require('express');
const userRoute = express.Router();
const {expressDonationIntent, getAllUsers, viewUserDetails, } = require('../controllers/user.controllers');

userRoute.post('/intention', expressDonationIntent);
userRoute.get('/listUsers', getAllUsers);
userRoute.get('/userDetails/:userId', viewUserDetails);
module.exports = userRoute;