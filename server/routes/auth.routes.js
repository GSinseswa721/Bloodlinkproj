const express = require('express');

const { SignIn, SignUp, ForgotPassword, updateUser , SignOut, SendFeedback} = require('../controllers/auth.controllers');
const { findById } = require('../models/user.models');
const authRoute = express.Router();

authRoute.post('/signup', SignUp);
authRoute.post('/forgot-password',ForgotPassword);
authRoute.post('/signin', SignIn);
authRoute.post('/signout', SignOut);
authRoute.post('/send-feedback', SendFeedback);




authRoute.get('/find', findById)




module.exports = authRoute;