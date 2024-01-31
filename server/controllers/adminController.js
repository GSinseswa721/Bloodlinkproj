const Admin = require('../models/Admin');
const Hospital = require('../models/Hospital');
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email: email });

        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        } else {
            if (password !== admin.password) {
                return res.status(401).json({ error: 'Invalid password' });
            } else {
                const token = jwt.sign({ _id: admin._id }, process.env.jWT_SECRET_KEY);
                res.json({ message: 'Admin login successful', admin, token });
            }
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to view pending hospital requests
exports.viewPendingHospitals = async (req, res) => {
    try {
        // Checking if the admin is logged in so that he can approve the request
        if (!req.admin) {
            return res.status(401).json({ error: 'Unauthorized action' });
        }

        const pendingHospitals = await Hospital.find({ status: 'pending' });

        res.json({ message: 'Pending hospitals retrieved successfully', hospitals: pendingHospitals });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.approveHospital = async (req, res) => {
    try {
        const registrationCode = req.params.registrationCode;


        const { action } = req.body;
        if (!req.admin) {
            return res.status(401).json({ error: 'Unauthorized action' });
        }
        const hospitalToApprove = await Hospital.findOne({ hospitalCode: registrationCode });
console.log(hospitalToApprove);
        if (!hospitalToApprove) {
            return res.status(404).json({ error: 'Hospital not found' });
        }
        if (action === 'approve') {
            hospitalToApprove.status = 'approved';
            await hospitalToApprove.save();
            res.json({ message: 'Hospital approved successfully', hospital: hospitalToApprove });
        } else if (action === 'deny') {
            hospitalToApprove.status = 'denied';
            await hospitalToApprove.save();
            res.json({ message: 'Hospital denied', hospital: hospitalToApprove });
        } else {
            res.status(400).json({ error: 'Invalid action. Use "approve" or "deny".' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    authenticateAdmin: exports.authenticateAdmin,
    adminLogin: exports.adminLogin,
    viewPendingHospitals: exports.viewPendingHospitals,
    approveHospital: exports.approveHospital,
};