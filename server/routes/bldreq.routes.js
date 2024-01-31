const bloodRequest = require('../controllers/bloodReq.controllers');
const express = require('express');
const bloodReqRoute = express.Router();
// const authenticateHospital = require('../middleWares/authenticated')


bloodReqRoute.post('/request-blood',  bloodRequest);

module.exports = bloodReqRoute