const Admin = require("../models/Admin");
const Hospital = require("../models/Hospital");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require('bcrypt');

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email });

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    } else {
      if (password !== admin.password) {
        return res.status(401).json({ error: "Invalid password" });
      } else {
        const token = jwt.sign({ _id: admin._id }, process.env.jWT_SECRET_KEY, {
          expiresIn: "24h",
        });
        res.json({ message: "Admin login successful", admin, token });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};


// Controller to update admin credentials
exports.updateAdminCredentials = async (req, res) => {
    const { adminId } = req.params;
    const { email, password} = req.body;

    try {
        // Check if admin with given ID exists
        const admin = await Admin.findById(adminId);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // Update email if provided
        if (email) {
            admin.email = email;
        }

        // Update password if provided
        if (password) {
            const saltRounds = 10;
            admin.password = await bcrypt.hash(password, saltRounds);
        }

        // Update profile picture if provided
        if (profilePicture) {
            admin.profilePicture = profilePicture;
        }

        // Save the updated admin
        await admin.save();

        return res.status(200).json({ message: "Admin credentials updated successfully", admin });
    } catch (error) {
        console.error("Error updating admin credentials:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


// Function to view pending hospital requests
exports.viewPendingHospitals = async (req, res) => {
  try {
    // Checking if the admin is logged in so that he can approve the request
    if (!req.admin) {
      return res.status(401).json({ error: "Unauthorized action" });
    }

    const pendingHospitals = await Hospital.find({ status: "pending" });

    res.json({
      message: "Pending hospitals retrieved successfully",
      hospitals: pendingHospitals,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.approveHospital = async (req, res) => {
  try {
    const registrationCode = req.params.registrationCode;

    const { action } = req.body;
    if (!req.admin) {
      return res.status(401).json({ error: "Unauthorized action" });
    }
    const hospitalToApprove = await Hospital.findOne({
      hospitalCode: registrationCode,
    });
    console.log(hospitalToApprove);
    if (!hospitalToApprove) {
      return res.status(404).json({ error: "Hospital not found" });
    }
    if (action === "approve") {
      hospitalToApprove.status = "approved";
      await hospitalToApprove.save();
      res.json({
        message: "Hospital approved successfully",
        hospital: hospitalToApprove,
      });
    } else if (action === "deny") {
      hospitalToApprove.status = "denied";
      await hospitalToApprove.save();
      res.json({ message: "Hospital denied", hospital: hospitalToApprove });
    } else {
      res
        .status(400)
        .json({ error: 'Invalid action. Use "approve" or "deny".' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = {
  authenticateAdmin: exports.authenticateAdmin,
  adminLogin: exports.adminLogin,
  viewPendingHospitals: exports.viewPendingHospitals,
  approveHospital: exports.approveHospital,
};
