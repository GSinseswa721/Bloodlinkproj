const express = require('express');
const hospitalController = require('../controllers/hospitalController');

const router = express.Router();

router.post('/register', hospitalController.registerHospital);
router.post('/login', hospitalController.hospitalLogin);
//router.get()

module.exports = router;