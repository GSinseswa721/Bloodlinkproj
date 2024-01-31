const mongoose = require('mongoose');
const User = require('./user.models');
const Hospital = require('./Hospital');

const AppointmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true
    },
    date: {
        type: Date,
        required: true
    },
    hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true },
})


module.exports = mongoose.model('Appointment', AppointmentSchema);