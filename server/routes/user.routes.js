const express = require('express');
const userRoute = express.Router();
const {expressDonationIntent, getAllUsers, viewUserDetails, findById, getUserDonationHistory } = require('../controllers/user.controllers');

userRoute.post('/intention', expressDonationIntent);
userRoute.get('/listUsers', getAllUsers);
userRoute.get('/userDetails/:userId', viewUserDetails);
userRoute.get('/:userId', findById); 
userRoute.get('/:userId/history', getUserDonationHistory);

module.exports = userRoute;
