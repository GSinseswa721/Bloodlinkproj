const Hospital = require('../models/Hospital');

exports.viewPendingHospitals = async (req, res) => {
    try {
        const pendingHospitals = await Hospital.find({ status: 'pending' });

        res.json({ message: 'Pending hospitals retrieved successfully', hospitals: pendingHospitals });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};