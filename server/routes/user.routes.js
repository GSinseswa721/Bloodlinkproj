const express = require('express');
const userRoute = express.Router();
const expressDonationIntent = require('../controllers/user.controllers');

userRoute.post('/intention', expressDonationIntent);

module.exports = userRoute;