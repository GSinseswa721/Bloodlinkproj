// const jwt = require('jsonwebtoken');
// const hospitalModel = require('../models/hospital.models');

// const authenticateHospital = async (req, res, next) => {
//     try {
//         const token = req.cookies.access_token;
//         // console.log(token);

//         if (!token) {
//             return res.status(401).json({ errorMessage: 'Unauthorized: Token missing' });
//         }

//         const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

//         if (verified.role !== 'hospital') {
//             return res.status(403).json({ errorMessage: 'Forbidden: Only hospitals are allowed' });
//         }

//         const validHospitalUser = await hospitalModel.findById(verified.id);

//         if (!validHospitalUser) {
//             return res.status(401).json({ errorMessage: 'Unauthorized: Hospital not found' });
//         }

//         req.hospital = validHospitalUser; // Attach the hospital object to the request
//         next();
//     } catch (err) {
//         console.error(err);
//         res.status(401).json({ errorMessage: 'Unauthorized: Invalid token' });
//     }
// };

// module.exports = authenticateHospital;
