const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
require('dotenv').config();
exports.authenticateAdmin = async (req, res, next) => {
    try {
        const authToken = req.headers.authorization;
        console.log(authToken);

        if (!authToken) {
            return res.status(401).json({ error: 'Authorization token is missing' });
        }

        try {
            const token = authToken.split(' ')[1];
            const decoded = jwt.verify(token, process.env.jWT_SECRET_KEY);

            console.log(decoded);

            const admin = await Admin.findById(decoded._id);
            
            if (admin.email === 'admin@mutonee.com') {
                req.admin = decoded._id;
                next();
            } else {
                return res.status(401).json({ error: 'Invalid admin token' });
            }
        } catch (error) {
            console.error('JWT Verification Error:', error);
            return res.status(401).json({ error: 'Invalid authorization token' });
        }
    } catch (error) {
        res.status(401).json({ error: 'Please authenticate' });
    }
};