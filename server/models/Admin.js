const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

adminSchema.pre('save', async function (next) {
    const admin = this;
    if (admin.isModified('password')) {
        const saltRounds = 10;
        admin.password = await bcrypt.hash(admin.password, saltRounds);
    }
    next();
});

 module.exports = mongoose.model('Admin', adminSchema);