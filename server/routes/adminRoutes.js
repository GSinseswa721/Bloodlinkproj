const express = require('express');
const adminController = require('../controllers/adminController');
const adminHospitalController = require('../controllers/adminHospitalController');
 const { authenticateAdmin } = require('../middleWares/authMiddleware');

const router = express.Router();

router.post('/login', adminController.adminLogin);
router.get('/pending-hospitals', adminHospitalController.viewPendingHospitals);
router.post('/approve-hospital/:registrationCode', authenticateAdmin, adminController.approveHospital);

module.exports = router;