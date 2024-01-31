const express = require('express');
// const Schedule = require('../controllers/appoint.controllers');
const sendAppointmentReminder = require('../controllers/appoint.controllers');
const appointRoute = express.Router();

appointRoute.post('/schedule', sendAppointmentReminder);

module.exports =appointRoute;