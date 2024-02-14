const express = require('express');
const adminController = require('../controllers/adminController');
const adminHospitalController = require('../controllers/adminHospitalController');
 const { authenticateAdmin } = require('../middleWares/authMiddleware');

const adminRouter = express.Router();

adminRouter.post('/login', adminController.adminLogin);
adminRouter.put('/admins/:adminId', adminController.updateAdminCredentials);
adminRouter.get('/pending-hospitals', adminHospitalController.viewPendingHospitals);
adminRouter.post('/approve-hospital/:registrationCode', authenticateAdmin, adminController.approveHospital);

module.exports = adminRouter;