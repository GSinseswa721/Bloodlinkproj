const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const hospitalSchema = new mongoose.Schema({
    hospitalName: { type: String, required: true },
    hospitalCode: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    role: {
        type: String, 
        default: 'Hospital'
    },
    status: { type: String, enum: ['pending', 'approved', 'denied'], default: 'pending' },
});
hospitalSchema.pre('save', async function (next) {
    const hospital = this;
    if (hospital.isModified('password')) {
        const saltRounds = 10;
        hospital.password = await bcrypt.hash(hospital.password, saltRounds);
    }
    next();
});

module.exports = mongoose.model('Hospital', hospitalSchema);