const bcrypt = require('bcrypt');
const Hospital = require('../models/Hospital');
 
exports.registerHospital = async (req, res) => {
    try {
        const { hospitalName, hospitalCode, email, password, location } = req.body;
        const existingHospital = await Hospital.findOne({
            $or: [{ hospitalCode }, { email }],
        });

        if (existingHospital) {
            return res.status(400).json({ error: 'Hospital with the same hospital code or email already exists' });
        }

   
        const newHospital = await Hospital.create({
            hospitalName,
            hospitalCode,
            email,
            password, 
            location,
            role: "Hospital",
            status: 'pending',
        });

        res.status(201).json({ message: 'Hospital registered successfully, awaiting admin approval', hospital: newHospital });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.hospitalLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

      
        const hospital = await Hospital.findOne({ email });

        if (!hospital) {
            return res.status(404).json({ error: 'Hospital not found' });
        }

      
        const isPasswordValid = await bcrypt.compare(password, hospital.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        if (hospital.status !== 'approved') {
            return res.status(403).json({ error: 'Hospital not yet approved by admin' });
        }

        res.json({ message: 'Hospital login successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// module.exports = {
//     hospitalLogin
// }