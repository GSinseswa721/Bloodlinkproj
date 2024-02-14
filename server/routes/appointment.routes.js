const express = require('express');
// const Schedule = require('../controllers/appoint.controllers');
const sendAppointmentReminder = require('../controllers/appoint.controllers');
const { submitDonation } = require('../controllers/appointment.controllers');
const appointRoute = express.Router();

appointRoute.post('/schedule', sendAppointmentReminder);
appointRoute.post('/donation', submitDonation)

module.exports =appointRoute;